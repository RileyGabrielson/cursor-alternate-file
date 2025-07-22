// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// Global variables to track the current and alternate files
let currentFile: string | undefined;
let alternateFile: string | undefined;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "cursor-alternate-file" is now active!');
	
	// Initialize with the currently active editor
	const activeEditor = vscode.window.activeTextEditor;
	if (activeEditor) {
		currentFile = activeEditor.document.uri.fsPath;
	}

	// Listen for editor changes to track file switching
	const editorChangeDisposable = vscode.window.onDidChangeActiveTextEditor((editor) => {
		if (editor) {
			const newFile = editor.document.uri.fsPath;
			
			// If we're switching to a different file, update our tracking
			if (newFile !== currentFile) {
				// The current file becomes the alternate file
				alternateFile = currentFile;
				// The new file becomes the current file
				currentFile = newFile;
			}
		}
	});

	// Register the command to switch between current and alternate files
	const switchCommandDisposable = vscode.commands.registerCommand('cursor-alternate-file.switchToAlternate', () => {
		switchToAlternateFile();
	});

	// Add both disposables to the context subscriptions
	context.subscriptions.push(editorChangeDisposable, switchCommandDisposable);
}

// Function to switch between current and alternate files
async function switchToAlternateFile() {
	// If we don't have an alternate file, show an error message
	if (!alternateFile) {
		vscode.window.showErrorMessage('No alternate file available. Please switch to a different file first.');
		return;
	}

	try {
		// Update our tracking - the alternate file is now current, and current becomes alternate
		const temp = currentFile;
		currentFile = alternateFile;
		alternateFile = temp;

		// Open the alternate file
		const document = await vscode.workspace.openTextDocument(currentFile || '');
		await vscode.window.showTextDocument(document);
	} catch (error) {
		vscode.window.showErrorMessage(`Failed to open alternate file: ${error}`);
	}
}

// This method is called when your extension is deactivated
export function deactivate() {}
