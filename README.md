# Cursor Alternate File

A VS Code extension that keeps track of the last visited file and allows you to quickly switch back and forth between the current file and the alternate file.

## Features

- **Automatic File Tracking**: The extension automatically tracks which files you're switching between
- **Quick Switching**: Use a single command to switch between the current file and the last visited file
- **Seamless Integration**: Works with any file type and doesn't interfere with your normal workflow

## How It Works

1. **File Tracking**: When you switch between files in VS Code, the extension automatically tracks the current file and the previous file (alternate file)
2. **Switching**: Use the "Switch to Alternate File" command to quickly jump between the current and alternate files
3. **Continuous Tracking**: The extension continues to track file changes as you work, always maintaining the most recent file pair

## Usage

### Command Palette
1. Open the Command Palette (`Cmd+Shift+P` on macOS, `Ctrl+Shift+P` on Windows/Linux)
2. Type "Switch to Alternate File"
3. Press Enter to switch to the alternate file

### Keyboard Shortcut
You can also bind this command to a keyboard shortcut in your VS Code settings:

```json
{
    "key": "ctrl+alt+a",
    "command": "cursor-alternate-file.switchToAlternate"
}
```

## Example Workflow

1. You're working on `src/main.ts`
2. You switch to `src/utils.ts` to check something
3. Use "Switch to Alternate File" to quickly return to `src/main.ts`
4. Use the command again to go back to `src/utils.ts`
5. Continue switching between these two files as needed

## Requirements

- VS Code 1.89.0 or higher

## Extension Settings

This extension doesn't add any VS Code settings. It works automatically once activated.

## Known Issues

- The extension needs at least two different files to be opened before the alternate file switching becomes available
- If you close a file that's being tracked, the extension will reset its tracking for that file

## Release Notes

### 0.0.1

- Initial release
- Basic file tracking functionality
- Switch to alternate file command

---

## For more information

* [Visual Studio Code Extension API](https://code.visualstudio.com/api)
* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

**Enjoy switching between files quickly!**
