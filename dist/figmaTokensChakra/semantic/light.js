// src/figmaTokensChakra/semantic/light.json
var semantic = {
  fg: {
    default: {
      value: "{color.neutrals.black}",
      type: "color"
    },
    muted: {
      value: "{color.gray.700}",
      type: "color"
    },
    subtle: {
      value: "{color.gray.500}",
      type: "color"
    },
    "on-accent": {
      value: "{color.neutrals.white}",
      type: "color"
    },
    "on-disabled": {
      value: "{color.gray.500}",
      type: "color"
    },
    disabled: {
      value: "{color.gray.300}",
      type: "color"
    },
    accent: {
      value: "{semantic.cta.default}",
      type: "color"
    }
  },
  bg: {
    surface: {
      value: "{color.neutrals.white}",
      type: "color"
    },
    muted: {
      value: "{color.gray.300}",
      type: "color"
    },
    subtle: {
      value: "{color.gray.100}",
      type: "color"
    },
    canvas: {
      value: "{color.zinc.50}",
      type: "color"
    }
  },
  cta: {
    default: {
      value: "{color.green.500}",
      type: "color"
    },
    emphasised: {
      value: "{color.sky.600}",
      type: "color"
    },
    muted: {
      value: "{color.sky.400}",
      type: "color"
    },
    subtle: {
      value: "{color.sky.100}",
      type: "color"
    },
    disabled: {
      value: "{color.gray.400}",
      type: "color"
    }
  },
  primary: {
    default: {
      value: "{color.sky.500}",
      type: "color"
    },
    emphasised: {
      value: "{color.sky.600}",
      type: "color"
    },
    muted: {
      value: "{color.sky.400}",
      type: "color"
    },
    subtle: {
      value: "{color.sky.100}",
      type: "color"
    },
    disabled: {
      value: "{color.gray.400}",
      type: "color"
    }
  },
  secondary: {
    default: {
      value: "{color.gray.600}",
      type: "color"
    },
    emphasised: {
      value: "{color.gray.500}",
      type: "color"
    },
    muted: {
      value: "{color.gray.300}",
      type: "color"
    },
    subtle: {
      value: "{color.gray.100}",
      type: "color"
    },
    disabled: {
      value: "{color.gray.400}",
      type: "color"
    }
  },
  warning: {
    fg: {
      value: "{color.amber.400}",
      type: "color"
    },
    emphasised: {
      value: "{color.amber.500}",
      type: "color"
    },
    muted: {
      value: "{color.amber.300}",
      type: "color"
    },
    subtle: {
      value: "{color.amber.100}",
      type: "color"
    },
    "on-warning": {
      value: "{color.neutrals.black}",
      type: "color"
    }
  },
  error: {
    fg: {
      value: "{color.red.400}",
      type: "color"
    },
    emphasised: {
      value: "{color.red.500}",
      type: "color"
    },
    muted: {
      value: "{color.red.300}",
      type: "color"
    },
    subtle: {
      value: "{color.red.100}",
      type: "color"
    },
    "on-error": {
      value: "{color.neutrals.white}",
      type: "color"
    }
  },
  info: {
    fg: {
      value: "{color.teal.400}",
      type: "color"
    },
    emphasised: {
      value: "{color.blue.500}",
      type: "color"
    },
    muted: {
      value: "{color.blue.300}",
      type: "color"
    },
    subtle: {
      value: "{color.blue.100}",
      type: "color"
    },
    "on-info": {
      value: "{color.neutrals.white}",
      type: "color"
    }
  },
  success: {
    fg: {
      value: "{color.emerald.400}",
      type: "color"
    },
    emphasised: {
      value: "{color.emerald.500}",
      type: "color"
    },
    muted: {
      value: "{color.emerald.300}",
      type: "color"
    },
    subtle: {
      value: "{color.emerald.100}",
      type: "color"
    },
    "on-success": {
      value: "{color.neutrals.white}",
      type: "color"
    }
  },
  help: {
    fg: {
      value: "{color.purple.400}",
      type: "color"
    },
    emphasised: {
      value: "{color.purple.500}",
      type: "color"
    },
    muted: {
      value: "{color.purple.300}",
      type: "color"
    },
    subtle: {
      value: "{color.purple.100}",
      type: "color"
    },
    "on-success": {
      value: "{color.neutrals.white}",
      type: "color"
    }
  },
  component: {
    "extra-small": {
      value: "{size.300}",
      type: "sizing"
    },
    small: {
      value: "{size.400}",
      type: "sizing"
    },
    medium: {
      value: "{size.500}",
      type: "sizing"
    },
    large: {
      value: "{size.600}",
      type: "sizing"
    },
    "extra-large": {
      value: "{size.700}",
      type: "sizing"
    }
  },
  ui: {
    "border-radius": {
      value: "{semantic.border.radius.small}",
      type: "borderRadius"
    }
  },
  neutral: {
    fg: {
      value: "{color.gray.400}",
      type: "color"
    },
    emphasised: {
      value: "{color.gray.500}",
      type: "color"
    },
    muted: {
      value: "{color.gray.300}",
      type: "color"
    },
    subtle: {
      value: "{color.gray.100}",
      type: "color"
    },
    "on-success": {
      value: "{color.neutrals.white}",
      type: "color"
    }
  },
  inputs: {
    background: {
      value: "{semantic.bg.surface}",
      type: "color"
    },
    text: {
      value: "{semantic.fg.muted}",
      type: "color"
    },
    placeholder: {
      value: "{semantic.fg.subtle}",
      type: "color"
    },
    border: {
      default: {
        value: "{semantic.bg.muted}",
        type: "color"
      },
      disabled: {
        value: "{semantic.fg.on-disabled}",
        type: "color"
      }
    },
    fg: {
      disabled: {
        value: "{semantic.fg.disabled}",
        type: "color"
      }
    }
  },
  border: {
    default: {
      value: "{semantic.bg.subtle}",
      type: "color"
    },
    radius: {
      small: {
        value: "{border-radius.0}",
        type: "borderRadius"
      },
      medium: {
        value: "{border-radius.4}",
        type: "borderRadius"
      },
      large: {
        value: "{border-radius.6}",
        type: "borderRadius"
      },
      round: {
        value: "{border-radius.9}",
        type: "borderRadius"
      }
    }
  },
  color: {
    actions: {
      negative: {
        default: {
          border: {
            value: "{semantic.error.fg}",
            type: "color"
          },
          text: {
            value: "{color.neutrals.white}",
            type: "color"
          },
          background: {
            value: "{semantic.error.fg}",
            type: "color"
          },
          icon: {
            value: "{semantic.error.fg}",
            type: "color"
          },
          "quiet-background": {
            value: "{color.neutrals.transparent}",
            type: "color"
          },
          "quiet-text": {
            value: "{semantic.error.fg}",
            type: "color"
          }
        },
        hover: {
          border: {
            value: "{semantic.error.muted}",
            type: "color"
          },
          text: {
            value: "{color.neutrals.white}",
            type: "color"
          },
          background: {
            value: "{semantic.error.muted}",
            type: "color"
          },
          icon: {
            value: "{semantic.error.muted}",
            type: "color"
          },
          "quiet-background": {
            value: "{semantic.error.muted}",
            type: "color"
          },
          "quiet-text": {
            value: "{color.neutrals.white}",
            type: "color"
          }
        },
        active: {
          border: {
            value: "{semantic.error.emphasised}",
            type: "color"
          },
          text: {
            value: "{color.neutrals.white}",
            type: "color"
          },
          background: {
            value: "{semantic.error.emphasised}",
            type: "color"
          },
          icon: {
            value: "{semantic.error.emphasised}",
            type: "color"
          },
          "quiet-background": {
            value: "{semantic.error.emphasised}",
            type: "color"
          },
          "quiet-text": {
            value: "{color.neutrals.white}",
            type: "color"
          }
        },
        focus: {
          border: {
            value: "{semantic.error.fg}",
            type: "color"
          },
          text: {
            value: "{color.neutrals.white}",
            type: "color"
          },
          background: {
            value: "{semantic.error.fg}",
            type: "color"
          },
          icon: {
            value: "{semantic.error.fg}",
            type: "color"
          }
        },
        disabled: {
          background: {
            value: "{semantic.fg.disabled}",
            type: "color"
          },
          text: {
            value: "{semantic.fg.on-disabled}",
            type: "color"
          },
          border: {
            value: "{semantic.fg.disabled}",
            type: "color"
          },
          icon: {
            value: "{semantic.fg.disabled}",
            type: "color"
          }
        }
      },
      cta: {
        default: {
          "border-color": {
            value: "{semantic.cta.default}",
            type: "color"
          },
          "text-color": {
            value: "{color.neutrals.white}",
            type: "color"
          },
          "background-color": {
            value: "{semantic.cta.default}",
            type: "color"
          }
        },
        hover: {
          "border-color": {
            value: "{semantic.cta.muted}",
            type: "color"
          },
          "text-color": {
            value: "{color.neutrals.white}",
            type: "color"
          },
          "background-color": {
            value: "{semantic.cta.muted}",
            type: "color"
          }
        },
        active: {
          "border-color": {
            value: "{semantic.cta.emphasised}",
            type: "color"
          },
          "text-color": {
            value: "{color.neutrals.white}",
            type: "color"
          },
          "background-color": {
            value: "{semantic.cta.emphasised}",
            type: "color"
          }
        },
        focus: {
          "border-color": {
            value: "{semantic.cta.default}",
            type: "color"
          },
          "text-color": {
            value: "{color.neutrals.white}",
            type: "color"
          },
          "background-color": {
            value: "{semantic.cta.default}",
            type: "color"
          }
        }
      },
      primary: {
        default: {
          border: {
            value: "{semantic.primary.default}",
            type: "color"
          },
          text: {
            value: "{color.neutrals.white}",
            type: "color"
          },
          background: {
            value: "{semantic.primary.default}",
            type: "color"
          },
          "quiet-background": {
            value: "{color.neutrals.transparent}",
            type: "color"
          }
        },
        hover: {
          border: {
            value: "{semantic.primary.muted}",
            type: "color"
          },
          text: {
            value: "{color.neutrals.white}",
            type: "color"
          },
          background: {
            value: "{semantic.primary.muted}",
            type: "color"
          },
          "quiet-background": {
            value: "{semantic.primary.muted}",
            type: "color"
          }
        },
        active: {
          border: {
            value: "{semantic.primary.emphasised}",
            type: "color"
          },
          text: {
            value: "{color.neutrals.white}",
            type: "color"
          },
          background: {
            value: "{semantic.primary.emphasised}",
            type: "color"
          },
          "quiet-background": {
            value: "{semantic.primary.emphasised}",
            type: "color"
          }
        },
        focus: {
          border: {
            value: "{semantic.primary.default}",
            type: "color"
          },
          "quiet-border": {
            value: "{color.neutrals.transparent}",
            type: "color"
          },
          text: {
            value: "{semantic.primary.default}",
            type: "color"
          },
          "quiet-text": {
            value: "{semantic.primary.default}",
            type: "color"
          },
          background: {
            value: "{color.neutrals.transparent}",
            type: "color"
          },
          "quiet-background": {
            value: "{color.neutrals.transparent}",
            type: "color"
          }
        },
        disabled: {
          background: {
            value: "{semantic.fg.disabled}",
            type: "color"
          },
          text: {
            value: "{semantic.fg.on-disabled}",
            type: "color"
          },
          border: {
            value: "{semantic.fg.disabled}",
            type: "color"
          }
        }
      },
      secondary: {
        default: {
          border: {
            value: "{semantic.secondary.default}",
            type: "color"
          },
          "quiet-border": {
            value: "{color.neutrals.transparent}",
            type: "color"
          },
          text: {
            value: "{semantic.secondary.default}",
            type: "color"
          },
          "quiet-text": {
            value: "{semantic.secondary.default}",
            type: "color"
          },
          background: {
            value: "{color.neutrals.transparent}",
            type: "color"
          },
          "quiet-background": {
            value: "{color.neutrals.transparent}",
            type: "color"
          }
        },
        hover: {
          border: {
            value: "{semantic.secondary.muted}",
            type: "color"
          },
          "quiet-border": {
            value: "{color.neutrals.transparent}",
            type: "color"
          },
          text: {
            value: "{semantic.secondary.default}",
            type: "color"
          },
          "quiet-text": {
            value: "{semantic.secondary.default}",
            type: "color"
          },
          background: {
            value: "{semantic.secondary.muted}",
            type: "color"
          },
          "quiet-background": {
            value: "{semantic.secondary.muted}",
            type: "color"
          }
        },
        active: {
          border: {
            value: "{semantic.secondary.emphasised}",
            type: "color"
          },
          "quiet-border": {
            value: "{color.neutrals.transparent}",
            type: "color"
          },
          text: {
            value: "{color.neutrals.white}",
            type: "color"
          },
          "quiet-text": {
            value: "{color.neutrals.white}",
            type: "color"
          },
          background: {
            value: "{semantic.secondary.emphasised}",
            type: "color"
          },
          "quiet-background": {
            value: "{semantic.secondary.emphasised}",
            type: "color"
          }
        },
        focus: {
          border: {
            value: "{semantic.secondary.default}",
            type: "color"
          },
          "quiet-border": {
            value: "{color.neutrals.transparent}",
            type: "color"
          },
          text: {
            value: "{semantic.secondary.default}",
            type: "color"
          },
          "quiet-text": {
            value: "{semantic.secondary.default}",
            type: "color"
          },
          background: {
            value: "{color.neutrals.transparent}",
            type: "color"
          },
          "quiet-background": {
            value: "{color.neutrals.transparent}",
            type: "color"
          }
        },
        disabled: {
          background: {
            value: "{semantic.fg.disabled}",
            type: "color"
          },
          text: {
            value: "{semantic.fg.on-disabled}",
            type: "color"
          },
          border: {
            value: "{semantic.fg.disabled}",
            type: "color"
          }
        }
      }
    },
    inputs: {
      default: {
        "border-color": {
          value: "{semantic.inputs.border.default}",
          type: "color"
        },
        "text-color": {
          value: "{semantic.inputs.text}",
          type: "color"
        },
        "icon-color": {
          value: "{semantic.inputs.text}",
          type: "color"
        },
        "background-color": {
          value: "{semantic.inputs.background}",
          type: "color"
        }
      },
      selected: {
        default: {
          "border-color": {
            value: "{semantic.cta.default}",
            type: "color"
          },
          "text-color": {
            value: "{semantic.cta.default}",
            type: "color"
          },
          "icon-color": {
            value: "{semantic.cta.default}",
            type: "color"
          },
          "background-color": {
            value: "{semantic.inputs.background}",
            type: "color"
          }
        },
        hover: {
          "border-color": {
            value: "{semantic.cta.muted}",
            type: "color"
          },
          "text-color": {
            value: "{semantic.cta.muted}",
            type: "color"
          },
          "icon-color": {
            value: "{semantic.cta.muted}",
            type: "color"
          },
          "background-color": {
            value: "{semantic.inputs.background}",
            type: "color"
          }
        }
      },
      error: {
        "border-color": {
          value: "{semantic.error.fg}",
          type: "color"
        },
        "text-color": {
          value: "{semantic.error.fg}",
          type: "color"
        },
        "icon-color": {
          value: "{semantic.error.fg}",
          type: "color"
        },
        "background-color": {
          value: "{semantic.inputs.background}",
          type: "color"
        }
      },
      disabled: {
        "background-color": {
          value: "{semantic.fg.disabled}",
          type: "color"
        },
        "text-color": {
          value: "{semantic.fg.on-disabled}",
          type: "color"
        },
        "icon-color": {
          value: "{semantic.fg.on-disabled}",
          type: "color"
        },
        "border-color": {
          value: "{semantic.inputs.border.disabled}",
          type: "color"
        }
      },
      hover: {
        "border-color": {
          value: "{semantic.inputs.border.default}",
          type: "color"
        },
        "text-color": {
          value: "{semantic.inputs.text}",
          type: "color"
        },
        "icon-color": {
          value: "{semantic.inputs.text}",
          type: "color"
        },
        "background-color": {
          value: "{color.neutrals.white}",
          type: "color"
        }
      },
      focus: {
        "border-color": {
          value: "{semantic.inputs.border.default}",
          type: "color"
        },
        "text-color": {
          value: "{semantic.inputs.text}",
          type: "color"
        },
        "icon-color": {
          value: "{semantic.inputs.text}",
          type: "color"
        },
        "background-color": {
          value: "{semantic.inputs.background}",
          type: "color"
        },
        "focus-ring": {
          value: "{color.blue.50}",
          type: "color"
        }
      }
    },
    feedback: {
      info: {
        "border-color": {
          value: "{semantic.info.fg}",
          type: "color"
        },
        "text-color": {
          value: "{semantic.info.fg}",
          type: "color"
        },
        "icon-color": {
          value: "{semantic.info.fg}",
          type: "color"
        },
        "background-color": {
          value: "{semantic.info.subtle}",
          type: "color"
        }
      },
      warning: {
        "border-color": {
          value: "{semantic.warning.fg}",
          type: "color"
        },
        "text-color": {
          value: "{semantic.warning.fg}",
          type: "color"
        },
        "icon-color": {
          value: "{semantic.warning.fg}",
          type: "color"
        },
        "background-color": {
          value: "{semantic.warning.subtle}",
          type: "color"
        }
      },
      success: {
        "border-color": {
          value: "{semantic.success.fg}",
          type: "color"
        },
        "text-color": {
          value: "{semantic.success.fg}",
          type: "color"
        },
        "icon-color": {
          value: "{semantic.success.fg}",
          type: "color"
        },
        "background-color": {
          value: "{semantic.success.subtle}",
          type: "color"
        }
      },
      help: {
        "border-color": {
          value: "{semantic.help.fg}",
          type: "color"
        },
        "text-color": {
          value: "{semantic.help.fg}",
          type: "color"
        },
        "icon-color": {
          value: "{semantic.help.fg}",
          type: "color"
        },
        "background-color": {
          value: "{semantic.help.subtle}",
          type: "color"
        }
      },
      neutral: {
        "border-color": {
          value: "{semantic.neutral.fg}",
          type: "color"
        },
        "text-color": {
          value: "{semantic.neutral.fg}",
          type: "color"
        },
        "icon-color": {
          value: "{semantic.neutral.fg}",
          type: "color"
        },
        "background-color": {
          value: "{semantic.neutral.subtle}",
          type: "color"
        }
      },
      error: {
        "border-color": {
          value: "{semantic.error.fg}",
          type: "color"
        },
        "text-color": {
          value: "{semantic.error.fg}",
          type: "color"
        },
        "icon-color": {
          value: "{semantic.error.fg}",
          type: "color"
        },
        "background-color": {
          value: "{semantic.error.subtle}",
          type: "color"
        }
      }
    },
    typography: {
      default: {
        value: "{color.gray.700}",
        type: "color"
      },
      "on-background": {
        value: "{color.neutrals.white}",
        type: "color"
      }
    },
    status: {
      info: {
        "border-color": {
          value: "{semantic.info.fg}",
          type: "color"
        },
        "text-color": {
          value: "{semantic.info.fg}",
          type: "color"
        },
        "icon-color": {
          value: "{semantic.info.fg}",
          type: "color"
        },
        "background-color": {
          value: "{semantic.info.subtle}",
          type: "color"
        }
      },
      warning: {
        "border-color": {
          value: "{semantic.warning.fg}",
          type: "color"
        },
        "text-color": {
          value: "{semantic.warning.fg}",
          type: "color"
        },
        "icon-color": {
          value: "{semantic.warning.fg}",
          type: "color"
        },
        "background-color": {
          value: "{semantic.warning.subtle}",
          type: "color"
        }
      },
      success: {
        "border-color": {
          value: "{semantic.success.fg}",
          type: "color"
        },
        "text-color": {
          value: "{semantic.success.fg}",
          type: "color"
        },
        "icon-color": {
          value: "{semantic.success.fg}",
          type: "color"
        },
        "background-color": {
          value: "{semantic.success.subtle}",
          type: "color"
        }
      },
      help: {
        "border-color": {
          value: "{semantic.help.fg}",
          type: "color"
        },
        "text-color": {
          value: "{semantic.help.fg}",
          type: "color"
        },
        "icon-color": {
          value: "{semantic.help.fg}",
          type: "color"
        },
        "background-color": {
          value: "{semantic.help.subtle}",
          type: "color"
        }
      },
      neutral: {
        "border-color": {
          value: "{semantic.neutral.fg}",
          type: "color"
        },
        "text-color": {
          value: "{semantic.neutral.fg}",
          type: "color"
        },
        "icon-color": {
          value: "{semantic.neutral.fg}",
          type: "color"
        },
        "background-color": {
          value: "{semantic.neutral.subtle}",
          type: "color"
        }
      },
      error: {
        "border-color": {
          value: "{semantic.error.fg}",
          type: "color"
        },
        "text-color": {
          value: "{semantic.error.fg}",
          type: "color"
        },
        "icon-color": {
          value: "{semantic.error.fg}",
          type: "color"
        },
        "background-color": {
          value: "{semantic.error.subtle}",
          type: "color"
        }
      }
    },
    navigation: {
      background: {
        value: "{semantic.cta.default}",
        type: "color"
      },
      border: {
        value: "{semantic.cta.emphasised}",
        type: "color"
      },
      text: {
        value: "{semantic.fg.on-accent}",
        type: "color"
      },
      icon: {
        value: "{semantic.fg.on-accent}",
        type: "color"
      }
    },
    focus: {
      border: {
        value: "{semantic.cta.subtle}",
        type: "color"
      }
    }
  },
  "font-size": {
    actions: {
      xs: {
        value: "{font-size.3}",
        type: "fontSizes"
      },
      sm: {
        value: "{font-size.4}",
        type: "fontSizes"
      },
      md: {
        value: "{font-size.5}",
        type: "fontSizes"
      },
      lg: {
        value: "{font-size.6}",
        type: "fontSizes"
      }
    },
    inputs: {
      xs: {
        value: "{font-size.3}",
        type: "fontSizes"
      },
      sm: {
        value: "{font-size.4}",
        type: "fontSizes"
      },
      md: {
        value: "{font-size.5}",
        type: "fontSizes"
      },
      lg: {
        value: "{font-size.6}",
        type: "fontSizes"
      }
    },
    feedback: {
      s: {
        value: "{font-size.3}",
        type: "fontSizes"
      },
      m: {
        value: "{font-size.4}",
        type: "fontSizes"
      },
      l: {
        value: "{font-size.5}",
        type: "fontSizes"
      },
      xl: {
        value: "{font-size.6}",
        type: "fontSizes"
      }
    },
    typography: {
      heading: {
        xs: {
          value: "{font-size.4}",
          type: "fontSizes"
        },
        s: {
          value: "{font-size.5}",
          type: "fontSizes"
        },
        m: {
          value: "{font-size.7}",
          type: "fontSizes"
        },
        l: {
          value: "{font-size.10}",
          type: "fontSizes"
        },
        xl: {
          value: "{font-size.14}",
          type: "fontSizes"
        },
        xxl: {
          value: "{font-size.18}",
          type: "fontSizes"
        },
        "d-1": {
          value: "{font-size.27}",
          type: "fontSizes"
        },
        "d-2": {
          value: "{font-size.26}",
          type: "fontSizes"
        },
        "d-3": {
          value: "{font-size.25}",
          type: "fontSizes"
        },
        "d-4": {
          value: "{font-size.24}",
          type: "fontSizes"
        }
      },
      body: {
        xs: {
          value: "{font-size.2}",
          type: "fontSizes"
        },
        s: {
          value: "{font-size.3}",
          type: "fontSizes"
        },
        m: {
          value: "{font-size.4}",
          type: "fontSizes"
        },
        l: {
          value: "{font-size.5}",
          type: "fontSizes"
        },
        xl: {
          value: "{font-size.6}",
          type: "fontSizes"
        },
        xxl: {
          value: "{font-size.7}",
          type: "fontSizes"
        },
        xxxl: {
          value: "{font-size.8}",
          type: "fontSizes"
        }
      },
      code: {
        xs: {
          value: "{font-size.2}",
          type: "fontSizes"
        },
        s: {
          value: "{font-size.3}",
          type: "fontSizes"
        },
        m: {
          value: "{font-size.4}",
          type: "fontSizes"
        },
        l: {
          value: "{font-size.5}",
          type: "fontSizes"
        },
        xl: {
          value: "{font-size.6}",
          type: "fontSizes"
        }
      },
      detail: {
        s: {
          value: "{font-size.1}",
          type: "fontSizes"
        },
        m: {
          value: "{font-size.2}",
          type: "fontSizes"
        },
        l: {
          value: "{font-size.3}",
          type: "fontSizes"
        },
        xl: {
          value: "{font-size.4}",
          type: "fontSizes"
        }
      }
    },
    status: {
      s: {
        value: "{font-size.3}",
        type: "fontSizes"
      },
      m: {
        value: "{font-size.4}",
        type: "fontSizes"
      },
      l: {
        value: "{font-size.5}",
        type: "fontSizes"
      },
      xl: {
        value: "{font-size.6}",
        type: "fontSizes"
      }
    },
    navigation: {
      xxs: {
        value: "{font-size.1}",
        type: "fontSizes"
      },
      xs: {
        value: "{font-size.1}",
        type: "fontSizes"
      },
      s: {
        value: "{font-size.1}",
        type: "fontSizes"
      },
      m: {
        value: "{font-size.2}",
        type: "fontSizes"
      },
      l: {
        value: "{font-size.3}",
        type: "fontSizes"
      },
      xl: {
        value: "{font-size.4}",
        type: "fontSizes"
      },
      xxl: {
        value: "{font-size.7}",
        type: "fontSizes"
      },
      xxxl: {
        value: "{font-size.8}",
        type: "fontSizes"
      }
    }
  },
  spacing: {
    actions: {
      xs: {
        "padding-left": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-right": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-top": {
          value: "{space.100}",
          type: "spacing"
        },
        "padding-bottom": {
          value: "{space.100}",
          type: "spacing"
        }
      },
      sm: {
        "padding-left": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-right": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-top": {
          value: "{space.150}",
          type: "spacing"
        },
        "padding-bottom": {
          value: "{space.150}",
          type: "spacing"
        }
      },
      md: {
        "padding-left": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-right": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-top": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-bottom": {
          value: "{space.200}",
          type: "spacing"
        }
      },
      lg: {
        "padding-left": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-right": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-top": {
          value: "{space.250}",
          type: "spacing"
        },
        "padding-bottom": {
          value: "{space.250}",
          type: "spacing"
        }
      }
    },
    inputs: {
      small: {
        "padding-left": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-right": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-top": {
          value: "{space.100}",
          type: "spacing"
        },
        "padding-bottom": {
          value: "{space.100}",
          type: "spacing"
        }
      },
      medium: {
        "padding-left": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-right": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-top": {
          value: "{space.150}",
          type: "spacing"
        },
        "padding-bottom": {
          value: "{space.150}",
          type: "spacing"
        }
      },
      large: {
        "padding-left": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-right": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-top": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-bottom": {
          value: "{space.200}",
          type: "spacing"
        }
      },
      "extra-large": {
        "padding-left": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-right": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-top": {
          value: "{space.250}",
          type: "spacing"
        },
        "padding-bottom": {
          value: "{space.250}",
          type: "spacing"
        }
      },
      "space-between": {
        value: "{space.100}",
        type: "spacing"
      }
    },
    feedback: {
      "padding-left": {
        value: "{space.200}",
        type: "spacing"
      },
      "padding-right": {
        value: "{space.200}",
        type: "spacing"
      },
      "padding-top": {
        value: "{space.200}",
        type: "spacing"
      },
      "padding-bottom": {
        value: "{space.200}",
        type: "spacing"
      }
    },
    status: {
      "space-between": {
        value: "{space.100}",
        type: "spacing"
      },
      small: {
        "padding-top": {
          value: "{space.75}",
          type: "spacing"
        },
        "padding-right": {
          value: "{space.150}",
          type: "spacing"
        },
        "padding-bottom": {
          value: "{space.75}",
          type: "spacing"
        },
        "padding-left": {
          value: "{space.150}",
          type: "spacing"
        }
      },
      medium: {
        "padding-top": {
          value: "{space.100}",
          type: "spacing"
        },
        "padding-right": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-bottom": {
          value: "{space.100}",
          type: "spacing"
        },
        "padding-left": {
          value: "{space.200}",
          type: "spacing"
        }
      },
      large: {
        "padding-top": {
          value: "{space.100}",
          type: "spacing"
        },
        "padding-right": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-bottom": {
          value: "{space.100}",
          type: "spacing"
        },
        "padding-left": {
          value: "{space.200}",
          type: "spacing"
        }
      },
      "extra-large": {
        "padding-top": {
          value: "{space.100}",
          type: "spacing"
        },
        "padding-right": {
          value: "{space.200}",
          type: "spacing"
        },
        "padding-bottom": {
          value: "{space.100}",
          type: "spacing"
        },
        "padding-left": {
          value: "{space.200}",
          type: "spacing"
        }
      }
    },
    ui: {
      xxs: {
        "space-between": {
          value: "{space.50}",
          type: "spacing"
        },
        "space-around": {
          value: "{space.50}",
          type: "spacing"
        }
      },
      xs: {
        "space-between": {
          value: "{space.100}",
          type: "spacing"
        },
        "space-around": {
          value: "{space.75}",
          type: "spacing"
        }
      },
      s: {
        "space-between": {
          value: "{space.200}",
          type: "spacing"
        },
        "space-around": {
          value: "{space.100}",
          type: "spacing"
        }
      },
      m: {
        "space-between": {
          value: "{space.300}",
          type: "spacing"
        },
        "space-around": {
          value: "{space.150}",
          type: "spacing"
        }
      },
      l: {
        "space-between": {
          value: "{space.400}",
          type: "spacing"
        },
        "space-around": {
          value: "{space.200}",
          type: "spacing"
        }
      },
      xl: {
        "space-between": {
          value: "{space.800}",
          type: "spacing"
        },
        "space-around": {
          value: "{space.300}",
          type: "spacing"
        }
      },
      xxl: {
        "space-between": {
          value: "{space.1200}",
          type: "spacing"
        },
        "space-around": {
          value: "{space.400}",
          type: "spacing"
        }
      },
      xxxl: {
        "space-between": {
          value: "{space.2000}",
          type: "spacing"
        },
        "space-around": {
          value: "{space.800}",
          type: "spacing"
        }
      },
      xxxxl: {
        "space-around": {
          value: "{space.1200}",
          type: "spacing"
        }
      }
    }
  },
  "font-family": {
    actions: {
      value: "{font-family.sans-serif}",
      type: "fontFamilies"
    },
    inputs: {
      value: "{font-family.sans-serif}",
      type: "fontFamilies"
    },
    "font-family": {
      inputs: {
        value: "{font-family.sans-serif}",
        type: "fontFamilies"
      },
      actions: {
        value: "{font-family.sans-serif}",
        type: "fontFamilies"
      },
      typography: {
        serif: {
          value: "{font-family.serif}",
          type: "fontFamilies"
        },
        "sans-serif": {
          value: "{font-family.sans-serif}",
          type: "fontFamilies"
        },
        mono: {
          value: "{font-family.mono}",
          type: "fontFamilies"
        }
      },
      feedback: {
        value: "{font-family.sans-serif}",
        type: "fontFamilies"
      },
      status: {
        value: "{font-family.sans-serif}",
        type: "fontFamilies"
      },
      navigation: {
        value: "{font-family.sans-serif}",
        type: "fontFamilies"
      }
    },
    typography: {
      serif: {
        value: "{font-family.serif}",
        type: "fontFamilies"
      },
      "sans-serif": {
        value: "{font-family.sans-serif}",
        type: "fontFamilies"
      },
      mono: {
        value: "{font-family.mono}",
        type: "fontFamilies"
      }
    },
    status: {
      value: "{font-family.sans-serif}",
      type: "fontFamilies"
    },
    navigation: {
      value: "{font-family.sans-serif}",
      type: "fontFamilies"
    }
  },
  "font-weight": {
    actions: {
      value: "{font-weight.semiBold}",
      type: "fontWeights"
    },
    inputs: {
      value: "{font-weight.regular}",
      type: "fontWeights"
    },
    feedback: {
      regular: {
        value: "{font-weight.regular}",
        type: "fontWeights"
      },
      bold: {
        value: "{font-weight.semiBold}",
        type: "fontWeights"
      }
    },
    typography: {
      light: {
        value: "{font-weight.light}",
        type: "fontWeights"
      },
      regular: {
        value: "{font-weight.regular}",
        type: "fontWeights"
      },
      semibold: {
        value: "{font-weight.semiBold}",
        type: "fontWeights"
      },
      bold: {
        value: "{font-weight.semiBold}",
        type: "fontWeights"
      }
    },
    status: {
      value: "{font-weight.regular}",
      type: "fontWeights"
    }
  },
  "border-radius": {
    actions: {
      value: "{border-radius.4}",
      type: "borderRadius"
    },
    inputs: {
      value: "{border-radius.4}",
      type: "borderRadius"
    },
    status: {
      value: "{semantic.border.radius.round}",
      type: "borderRadius"
    },
    feedback: {
      value: "{border-radius.4}",
      type: "borderRadius"
    },
    navigation: {
      default: {
        value: "{semantic.border.radius.small}",
        type: "borderRadius"
      },
      round: {
        value: "{semantic.border.radius.round}",
        type: "borderRadius"
      }
    },
    "ui-card": {
      value: "{border-radius.4}",
      type: "borderRadius"
    },
    ui: {
      value: "{border-radius.9}",
      type: "borderRadius"
    }
  },
  "border-width": {
    actions: {
      value: "{border-width.1}",
      type: "borderWidth"
    },
    inputs: {
      value: "{border-width.1}",
      type: "borderWidth"
    },
    status: {
      value: "{border-width.1}",
      type: "borderWidth"
    },
    feedback: {
      value: "{border-width.1}",
      type: "borderWidth"
    },
    navigation: {
      value: "{border-width.2}",
      type: "borderWidth"
    },
    slider: {
      value: "{border-width.3}",
      type: "borderWidth"
    },
    focus: {
      value: "{border-width.3}",
      type: "borderWidth"
    }
  },
  sizing: {
    actions: {
      xs: {
        value: "{semantic.component.small}",
        type: "sizing"
      },
      sm: {
        value: "{semantic.component.medium}",
        type: "sizing"
      },
      md: {
        value: "{semantic.component.large}",
        type: "sizing"
      },
      lg: {
        value: "{semantic.component.extra-large}",
        type: "sizing"
      },
      "icon-size": {
        xs: {
          value: "{size.200}",
          type: "sizing"
        },
        sm: {
          value: "{size.300}",
          type: "sizing"
        },
        md: {
          value: "{size.400}",
          type: "sizing"
        },
        lg: {
          value: "{size.500}",
          type: "sizing"
        }
      }
    },
    inputs: {
      xs: {
        value: "{semantic.component.small}",
        type: "sizing"
      },
      sm: {
        value: "{semantic.component.medium}",
        type: "sizing"
      },
      md: {
        value: "{semantic.component.large}",
        type: "sizing"
      },
      lg: {
        value: "{semantic.component.extra-large}",
        type: "sizing"
      },
      "icon-size": {
        small: {
          value: "{size.200}",
          type: "sizing"
        },
        medium: {
          value: "{size.300}",
          type: "sizing"
        },
        large: {
          value: "{size.400}",
          type: "sizing"
        },
        "extra-large": {
          value: "{size.500}",
          type: "sizing"
        }
      },
      width: {
        value: "{size.250}",
        type: "sizing"
      }
    },
    feedback: {
      "icon-size": {
        value: "{size.200}",
        type: "sizing"
      },
      width: {
        value: "{size.900}",
        type: "sizing"
      }
    },
    status: {
      s: {
        height: {
          value: "{semantic.component.extra-small}",
          type: "sizing"
        },
        "icon-size": {
          value: "{size.100}",
          type: "sizing"
        }
      },
      m: {
        height: {
          value: "{semantic.component.small}",
          type: "sizing"
        },
        "icon-size": {
          value: "{size.200}",
          type: "sizing"
        }
      },
      l: {
        height: {
          value: "{semantic.component.medium}",
          type: "sizing"
        },
        "icon-size": {
          value: "{size.300}",
          type: "sizing"
        }
      },
      xl: {
        height: {
          value: "{semantic.component.large}",
          type: "sizing"
        },
        "icon-size": {
          value: "{size.400}",
          type: "sizing"
        }
      }
    },
    navigation: {
      "icon-size": {
        xxs: {
          value: "{size.200}",
          type: "sizing"
        },
        xs: {
          value: "{size.250}",
          type: "sizing"
        },
        s: {
          value: "{size.300}",
          type: "sizing"
        },
        m: {
          value: "{size.400}",
          type: "sizing"
        },
        l: {
          value: "{size.400}",
          type: "sizing"
        },
        xl: {
          value: "{size.500}",
          type: "sizing"
        },
        xxl: {
          value: "{size.700}",
          type: "sizing"
        },
        xxxl: {
          value: "{size.900}",
          type: "sizing"
        }
      },
      xxs: {
        value: "{size.250}",
        type: "sizing"
      },
      xs: {
        value: "{size.300}",
        type: "sizing"
      },
      s: {
        value: "{size.400}",
        type: "sizing"
      },
      m: {
        value: "{size.450}",
        type: "sizing"
      },
      l: {
        value: "{size.500}",
        type: "sizing"
      },
      xl: {
        value: "{size.600}",
        type: "sizing"
      },
      xxl: {
        value: "{size.800}",
        type: "sizing"
      },
      xxxl: {
        value: "{size.1000}",
        type: "sizing"
      }
    }
  },
  "line-height": {
    typography: {
      heading: {
        value: "{line-height.120}",
        type: "lineHeights"
      },
      display: {
        value: "{line-height.100}",
        type: "lineHeights"
      },
      body: {
        value: "{line-height.2}",
        type: "lineHeights"
      },
      code: {
        value: "{line-height.1}",
        type: "lineHeights"
      },
      detail: {
        value: "{line-height.1}",
        type: "lineHeights"
      }
    }
  }
};
var light_default = {
  semantic
};
export {
  light_default as default,
  semantic
};
