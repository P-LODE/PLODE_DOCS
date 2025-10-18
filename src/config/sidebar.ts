import enLabels from "../content/nav/en.js";

type NavKey = keyof typeof enLabels;
type NavDict = Record<NavKey, string>;

interface SidebarItemCommon {
  label: string;
  translations?: Record<string, string>;
  collapsed?: boolean;
  icon?: string; 
}

type SidebarLinkItem = SidebarItemCommon & {
  link: string;
  attrs?: Record<string, string | number | boolean>;
  badge?: BadgeConfig; 
};

type BadgeConfig =
  | string
  | {
      text: string | Record<string, string>; // Allow string or object for i18n
      variant?: "note" | "tip" | "danger" | "caution" | "success";
      class?: string;
    };

export type NestedSidebarItem = 
  string | SidebarLinkItem | SidebarGroupWithItems | SidebarGroupWithAutogenerate;

type SidebarGroupWithItems = SidebarItemCommon & {
  items: NestedSidebarItem[];
};

type SidebarGroupWithAutogenerate = SidebarItemCommon & {
  autogenerate: { directory: string; collapsed?: boolean };
};

const translations = (() => {
  const result: Record<NavKey, Record<string, string>> = {} as Record<
    NavKey,
    Record<string, string>
  >;

  Object.keys(enLabels).forEach((key) => {
    result[key as NavKey] = {};
  });

  try {
    const langModules = import.meta.glob<{ default: NavDict }>("../content/nav/*.ts", {
      eager: true,
    });

    if (Object.keys(langModules).length === 0) {
      console.warn(
        "Warning: No translation files found in '../content/nav/*.ts'. " +
          "This may indicate that the directory doesn't exist or is empty. " +
          "Only English labels will be available.",
      );
    }

    Object.entries(langModules).forEach(([path, mod]) => {
      const match = /\/([^/]+)\.ts$/.exec(path);
      if (!match?.[1]) return;

      const lang = match[1];
      const dict = mod.default;

      // Add translations to our result
      Object.keys(dict).forEach((key) => {
        if (Object.prototype.hasOwnProperty.call(result, key)) {
          const navKey = key as NavKey;
          result[navKey]![lang] = dict[navKey] || "";
        }
      });
    });
  } catch (error) {
    console.error("Error loading translation files:", error);
    console.warn("Falling back to English-only labels");
  }

  return result;
})();

/**
 * Create a sidebar group entry with labels and translations from nav files
 *
 * @param key - The key in the navigation dictionary
 * @param key - The key in the navigation dictionary
 * @param config - Configuration for the sidebar group
 * @returns A sidebar group entry compatible with Starlight's config
 */
// Define specific config types that include the optional icon
type GroupWithItemsConfig = Omit<SidebarGroupWithItems, "label" | "translations"> & {
  icon?: string;
};
type GroupWithAutogenerateConfig = Omit<SidebarGroupWithAutogenerate, "label" | "translations"> & {
  icon?: string;
};

/**
 * Create a sidebar group entry with labels and translations from nav files
 *
 * @param key - The key in the navigation dictionary
 * @param config - Configuration for the sidebar group, potentially including an icon
 * @returns A sidebar group entry compatible with Starlight's config
 */
export function group(
  key: NavKey,
  config: GroupWithItemsConfig | GroupWithAutogenerateConfig,
): SidebarGroupWithItems | SidebarGroupWithAutogenerate {
  return {
    label: enLabels[key],
    translations: translations[key],
    ...config,
  };
}
