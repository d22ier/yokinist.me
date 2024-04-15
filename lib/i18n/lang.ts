import BLOG from "~/blog.config";

const lang = {
  fr: {
    NAV: {
      INDEX: "Blog",
      RSS: "RSS",
      SEARCH: "Recherche",
      ABOUT: "A propos",
      CONTACT: "Contactez-moi",
    },
    PAGINATION: {
      PREV: "Précédent",
      NEXT: "Suivant",
    },
    POST: {
      BACK: "Retour",
      TOP: "En haut",
      SHARE: "Share with Twitter",
      NOTFOUND: "Article non trouvé.",
      SEARCH: "Recherchez des Articles",
      SEARCHIN: "Recherche",
    },
  },
  en: {
    NAV: {
      INDEX: "Blog",
      RSS: "RSS",
      SEARCH: "Search",
      ABOUT: "About",
      CONTACT: "Contact",
    },
    PAGINATION: {
      PREV: "Prev",
      NEXT: "Next",
    },
    POST: {
      BACK: "Back",
      TOP: "Top",
      SHARE: "Share with Twitter",
      NOTFOUND: "No posts found.",
      SEARCH: "Search Articles",
      SEARCHIN: "Search in",
    },
  },
  es: {
    NAV: {
      INDEX: "Blog",
      RSS: "RSS",
      SEARCH: "Buscar",
      ABOUT: "Acerca de mí",
      CONTACT: "Contact"
    },
    PAGINATION: {
      PREV: "Anterior",
      NEXT: "Siguiente",
    },
    POST: {
      BACK: "Atrás",
      TOP: "Arriba",
      SHARE: "Share with Twitter",
      NOTFOUND: "No posts found.",
      SEARCH: "Search Articles",
      SEARCHIN: "Search in",
    },
  },
} as const;

export const fetchLocaleLang = () => {
  const s = BLOG.lang.toLowerCase();
  if (s === "fr-FR") {
    return lang.fr;
  }
  return lang.fr;
};
