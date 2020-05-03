export default {
  layout: {
    default: {
      nav: {
        button: {
          signin: "Se connecter",
          signup: "S'enregistrer",
        },
      },
    },
    admin: {
      nav: {
        profile: "Profil",
        signout: "Déconnexion",
      },
    },
  },
  common: {
    form: {
      name: {
        validation: {
          require: "Merci de saisir le nom de votre entité (marque).",
        },
      },
      email: {
        validation: {
          require: "Merci de saisir votre email principal.",
          valid: "L'e-mail doit être valide.",
        },
      },
      password: {
        validation: {
          require: "Merci de saisir un mot de passe.",
          secured:
            "Merci de saisir un mot de passe plus sécurisé avec 6 caractères minimum.",
        },
      },
    },
  },
  cookies: {
    content:
      "Nous utilisons des cookies pour nous permettre de mieux comprendre comment le site est utilisé. En continuant à utiliser ce site, vous acceptez cette politique.",
  },
  cgv:
    "<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p><h3>Fin</h3>",
  signup: {
    error: {
      registrationFailed:
        "Il n'est pas possible de vous enregistrer avec ces identifiants.",
    },
    step1: {
      h1: "Créer son profil",
      explain:
        "Commence par créer un profil en choisissant une image et un nom.",
      form: {
        name: {
          label: "Nom",
        },
      },
    },
    step2: {
      h1: "Conditions générales",
      explain: "Voici les détails de notre service en toute transparence",
    },
    step3: {
      h1: "S'enregistrer",
      explain:
        "Félicication, c'est la denière étape. Il ne reste plus qu'à compéter les informations pour se connecter a @trap.io",
      form: {
        email: {
          label: "Email",
        },
        password: {
          label: "Mot de passe",
        },
      },
    },
  },
  signin: {
    error: {
      loginFail: "Les identifiants de connexion ne sont pas correcte.",
      unexpectedError:
        "Une erreur est survenue. Il est possible que vous vous soyez connecté trop de fois en echec. Réessayez plus tard.",
    },
    h1: "Se connecter",
    explain: "Saisi toutes les informations pour te connecter",
    button: "Se connecter",
    resetPassword: "J'ai oublié mon mot de passe.",
    form: {
      email: {
        label: "Email",
      },
      password: {
        label: "Mot de passe",
      },
    },
  },
  reset: {
    h1: "Mot de passe oublié",
    explain:
      "En saisissant les informations de ce formulaire, vous allez recevoir un email permettant de changer de mot de passe",
    button: "Réinitialiser",
    signin: "Aller à la page de connexion",
    snackbar: {
      message:
        "Un email vient de vous être envoyé avec un lien clicable pour modifier votre mot de passe.",
    },
    form: {
      email: {
        label: "Email",
      },
    },
  },
  password: {
    h1: "Changement de mot de passe",
    explain: "Saisissez votre nouveau mot de passe pour le réinitialiser.",
    button: "Enregister ce mot de passe",
    reset: "Réinitiliser mon mot de passe",
    snackbar: {
      message: {
        error:
          'Il est impossible de changer de mot de passe. Vous devez recommander l\'opération de réinitialisation en cliquant sur le lien "Réinitiliser mon mot de passe"',
        success:
          'Votre mot de passe a été réinititialisé. Vous pouvez-vous connecter en cliquant sur le lien "Réinitiliser mon mot de passe"',
      },
    },
    form: {
      password: {
        label: "Password",
      },
    },
  },
  profile: {
    h1: "Gestion du profil",
    explain:
      "Ici, vous pouvez modifier votre profil général. C'est-à-dire votre email, ou votre mot de passe.",
  },
}
