interface MonacoEditor {
  getModel: () => MonacoModel | null;
  updateOptions: (options: { placeholder?: string }) => void;
}

interface MonacoModel {
  uri?: {
    path?: string;
  };
}

interface MonacoAPI {
  editor: {
    getEditors: () => MonacoEditor[];
    onDidCreateEditor: (callback: (editor: MonacoEditor) => void) => void;
  };
}

declare global {
  interface Window {
    monaco?: MonacoAPI;
  }
}

if (typeof window !== "undefined" && !window.MonacoEnvironment) {
  const importMeta = import.meta as { env?: { BASE_URL?: string } };
  const base = importMeta.env?.BASE_URL ?? "/";
  const workerPath = `${base}monaco`;

  const workerMap: Record<string, string> = {
    editorWorkerService: `${workerPath}/editor.worker.bundle.js`,
    json: `${workerPath}/json.worker.bundle.js`,
    graphql: `${workerPath}/graphql.worker.bundle.js`,
  };

  window.MonacoEnvironment = {
    globalAPI: true,
    getWorkerUrl(_moduleId: string, label: string): string {
      return (
        workerMap[label] ?? workerMap.editorWorkerService ?? `${workerPath}/editor.worker.bundle.js`
      );
    },
  };

  const waitForMonaco = (): Promise<MonacoAPI> => {
    return new Promise((resolve) => {
      const checkMonaco = (): void => {
        if (window.monaco?.editor) {
          resolve(window.monaco);
        } else {
          requestAnimationFrame(checkMonaco);
        }
      };
      checkMonaco();
    });
  };

  const waitForEditorModel = (editor: MonacoEditor): Promise<MonacoModel> => {
    return new Promise((resolve) => {
      const checkModel = (): void => {
        const model = editor.getModel();
        if (model) {
          resolve(model);
        } else {
          requestAnimationFrame(checkModel);
        }
      };
      checkModel();
    });
  };

  const applyPlaceholder = async (editor: MonacoEditor): Promise<void> => {
    try {
      const model = await waitForEditorModel(editor);
      if (model.uri?.path?.includes("response")) {
        editor.updateOptions({
          placeholder: "// Run a query to see results here",
        });
      }
    } catch (error) {
      console.error("Error applying placeholder:", error);
    }
  };

  void (async (): Promise<void> => {
    try {
      const monaco = await waitForMonaco();
      monaco.editor.getEditors().forEach((editor) => void applyPlaceholder(editor));
      monaco.editor.onDidCreateEditor((editor) => void applyPlaceholder(editor));
    } catch (error) {
      console.error("Error setting up Monaco placeholder:", error);
    }
  })();
}

export {};
