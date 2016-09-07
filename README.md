## Cascable for iOS Localizable Resources

This repository contains localizable resources for the Cascable iOS application. 

### Working on Existing Languages

If you find a problem with any translations in Cascable, feel free to file an issue here with a description of the problem (in English, please!) and we'll look into it. 

If you're familiar with the process of editing strings files and working with git, we'd gladly accept a pull request.

### Creating new Langauges 

To work on a new language, please file a request for us to create it. We'll create the language for you with all of the strings pre-filled with the English values for translation.

### Tools

The repository contains some tools to help with the localization process:

- `generate-string-symbols` creates C header files containing symbols for each entry in a strings file. The Cascable client uses this to make sure that it's using strings that actually exist.

- `verify-string-files` takes a strings file from the Base localization and makes sure that all the strings are present in all localizations of that file. The Cascable client uses this to alert us to any problems at build time. It's also useful when you're working on strings files to check you haven't missed anything.

- `verify-all-base-strings-files.sh` is a quick shortcut script that runs `verify-string-files` on all of the strings files in the base localization.
