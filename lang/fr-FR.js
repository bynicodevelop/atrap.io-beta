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
          validation: {
            require: "Merci de saisir le nom de votre entité (marque).q",
          },
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
          validation: {
            require: "Merci de saisir votre email principal.",
            valid: "L'e-mail doit être valide.",
          },
        },
        password: {
          label: "Mot de passe",
          validation: {
            require: "Merci de saisir un mot de passe.",
            secured:
              "Merci de saisir un mot de passe plus sécurisé avec 6 caractères minimum.",
          },
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
        validation: {
          require: "Merci de saisir votre email principal",
          valid: "L'e-mail doit être valide",
        },
      },
      password: {
        label: "Mot de passe",
        validation: {
          require: "Merci de saisir un mot de passe",
        },
      },
    },
  },
}
