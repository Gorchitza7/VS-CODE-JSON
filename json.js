{
	// Main editor settings
	"window.openFilesInNewWindow": "off",
	"editor.tabSize": 2,
	"editor.folding": false,
	"editor.insertSpaces": false,
	"editor.smoothScrolling": true,
	"editor.detectIndentation": true,
	"editor.suggestSelection": "first",
	"editor.multiCursorModifier": "ctrlCmd",

	// Wrapping
	"editor.wordWrap": "bounded",
	"editor.wrappingIndent": "same",
	"editor.wordWrapColumn": 80,

	//Определяет, будет ли редактор прокручиваться за пределы последней строки.
	"editor.scrollBeyondLastLine": true,

	// Rename tags
	"editor.linkedEditing": true,

	// Auto closing tags
	"html.autoClosingTags": true,
	"javascript.autoClosingTags": true,
	"typescript.autoClosingTags": true,

	//Определяет, должен ли редактор отображать управляющие символы.
	"editor.renderControlCharacters": false,

	//Управляет выделением символов, которые можно спутать с основными символами 	ASCII, кроме тех, которые являются общими для текущего пользовательского языкового стандарта.
	"editor.unicodeHighlight.ambiguousCharacters": false,

	"editor.quickSuggestionsDelay": 0,
	// "html.completion.attributeDefaultValue": "singlequotes", // Одинарные кавычки по дефолту

	// ================= Оформление ================

	//Appearance ---------------------
	"editor.bracketPairColorization.enabled": false,
	"editor.scrollbar.horizontal": "hidden",
	"editor.scrollbar.vertical": "hidden",
	// "window.density.editorTabHeight": "compact",
	// "workbench.activityBar.location": "top",
	"editor.accessibilitySupport": "off",
	// "window.commandCenter": false,
	// "workbench.layoutControl.enabled": false,
	// "symbols.hidesExplorerArrows": false,

	// Cursor ------------------------
	"editor.cursorBlinking": "expand",
	"editor.cursorStyle": "line-thin",
	"editor.cursorSmoothCaretAnimation": "explicit",

	// Font ------------------
	// "editor.fontSize": 19,
	// // "editor.lineHeight": 32,
	"editor.fontLigatures": true,
	// // "editor.fontFamily": "Operator mono lig, Iosevka NFM, JetBrains Mono, Monaspace Neon, Maple Mono, MonoLisa, Ubuntu Mono, DejaVu Sans Mono, Fira Code, monoki, Hasklig, PragmataPro, IBM Plex Mono, Victor Mono, Roboto Mono, monospace",
	// "editor.inlayHints.fontFamily": "PragmataPro",

	// ---------------

	//Terminal -------------------------------
	"terminal.integrated.tabs.enabled": false,

	//Explorer ---------------------
	"explorer.confirmDelete": false,
	"explorer.compactFolders": false,
	"explorer.confirmDragAndDrop": false,
	//Разрешить уменьшение размера вкладок, когда доступного места недостаточно для отображения всех вкладок одновременно.
	"workbench.editor.tabSizing": "shrink",
	"workbench.startupEditor": "newUntitledFile",

	// //Debug
	// "debug.toolBarLocation": "hidden",
	// "debug.focusWindowOnBreak": false,
	// "debug.showInlineBreakpointCandidates": false,
	// "debug.showBreakpointsInOverviewRuler": false,

	// Emmet -------------------
	"emmet.includeLanguages": {
		"blade": "html",
		"javascript": "javascriptreact"
	},
	"emmet.triggerExpansionOnTab": true,

	//Format ----------------
	"prettier.semi": false,
	"prettier.useTabs": true,
	"prettier.singleQuote": true,
	"prettier.jsxSingleQuote": true,
	"editor.codeActionsOnSave": {
		"source.organizeImports": "explicit"
	},
	"[prisma]": {
		"editor.defaultFormatter": "Prisma.prisma"
	},
	//Включите круглые скобки вокруг единственного параметра функции стрелки
	"prettier.arrowParens": "avoid",
	// "files.associations": { "*.scss": "postcss", "*.module.scss": "postcss" },
	"editor.inlineSuggest.enabled": true,

	// //Laravel ---------------
	// "[blade]": {
	// 	"editor.defaultFormatter": "onecentlin.laravel-blade"
	// },
	// "[php]": {
	// 	"editor.defaultFormatter": "DEVSENSE.phptools-vscode"
	// },

	// Breadcrumbs --------------
	"breadcrumbs.icons": false,
	"breadcrumbs.showKeys": false,
	"breadcrumbs.showFiles": false,
	"breadcrumbs.symbolPath": "off",
	"breadcrumbs.showArrays": false,
	"breadcrumbs.showEvents": false,
	"breadcrumbs.showFields": false,
	"breadcrumbs.showClasses": false,
	"breadcrumbs.showMethods": false,
	"breadcrumbs.showBooleans": false,
	"breadcrumbs.showFunctions": false,
	"breadcrumbs.showConstants": false,
	"breadcrumbs.showEnumMembers": false,
	"breadcrumbs.showConstructors": false,

	//JS & TS
	"javascript.updateImportsOnFileMove.enabled": "always",
	"typescript.updateImportsOnFileMove.enabled": "always",
	"typescript.preferences.quoteStyle": "single",
	"javascript.preferences.quoteStyle": "single",
	"javascript.format.semicolons": "remove",
	"typescript.format.semicolons": "remove",
	// Использование экспериментальных декораторов в JS/TS
	"js/ts.implicitProjectConfig.experimentalDecorators": true,

	// ------------ По умолчанию -------------
	"workbench.colorTheme": "Vivid Black",
	// "workbench.startupEditor": "none",
	"workbench.iconTheme": "material-icon-theme",
	"[python]": {
		"editor.formatOnType": true
	},
	"workbench.layoutControl.enabled": false,
	"editor.fontSize": 20,
	"editor.letterSpacing": 0.5,
	"terminal.integrated.fontSize": 18,
	"editor.minimap.enabled": false,
	"editor.hover.delay": 1500,
	"editor.glyphMargin": false,
	"workbench.colorCustomizations": {
		"statusBar.border": "#206486",
		"panel.border": "#59ace2"
	},
	"editor.tokenColorCustomizations": {
		"variables": "#F4F4E0",
		"textMateRules": [
			{
				"scope": [
					"source",
					"variable",
					"constant",
					"variable.other.constant",
					"punctuation.definition.constant",
					"constant.other.symbol",
					"constant.language.symbol",
					"support.constant",
					"support.variable.magic.python",
					"variable.other.enummember"
				],
				"settings": {
					"foreground": "#F4F4E0"
				}
			}
		]
	},
	"code-runner.executorMap": {
		"javascript": "node",
		"java": "cd $dir && javac $fileName && java $fileNameWithoutExt",
		"c": "cd $dir && gcc $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
		"zig": "zig run",
		"cpp": "cd $dir && g++ $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
		"objective-c": "cd $dir && gcc -framework Cocoa $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
		"php": "php",
		"python": "python3 -u",
		"perl": "perl",
		"perl6": "perl6",
		"ruby": "ruby",
		"go": "go run",
		"lua": "lua",
		"groovy": "groovy",
		"powershell": "powershell -ExecutionPolicy ByPass -File",
		"bat": "cmd /c",
		"shellscript": "bash",
		"fsharp": "fsi",
		"csharp": "scriptcs",
		"vbscript": "cscript //Nologo",
		"typescript": "ts-node",
		"coffeescript": "coffee",
		"scala": "scala",
		"swift": "swift",
		"julia": "julia",
		"crystal": "crystal",
		"ocaml": "ocaml",
		"r": "Rscript",
		"applescript": "osascript",
		"clojure": "lein exec",
		"haxe": "haxe --cwd $dirWithoutTrailingSlash --run $fileNameWithoutExt",
		"rust": "cd $dir && rustc $fileName && $dir$fileNameWithoutExt",
		"racket": "racket",
		"scheme": "csi -script",
		"ahk": "autohotkey",
		"autoit": "autoit3",
		"dart": "dart",
		"pascal": "cd $dir && fpc $fileName && $dir$fileNameWithoutExt",
		"d": "cd $dir && dmd $fileName && $dir$fileNameWithoutExt",
		"haskell": "runghc",
		"nim": "nim compile --verbosity:0 --hints:off --run",
		"lisp": "sbcl --script",
		"kit": "kitc --run",
		"v": "v run",
		"sass": "sass --style expanded",
		"scss": "scss --style expanded",
		"less": "cd $dir && lessc $fileName $fileNameWithoutExt.css",
		"FortranFreeForm": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
		"fortran-modern": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
		"fortran_fixed-form": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
		"fortran": "cd $dir && gfortran $fileName -o $fileNameWithoutExt && $dir$fileNameWithoutExt",
		"sml": "cd $dir && sml $fileName"
	},
	"code-runner.clearPreviousOutput": true,
	"code-runner.showExecutionMessage": false,
	"code-runner.saveFileBeforeRun": true,
	// "code-runner.runInTerminal": true,
	// "liveServer.settings.CustomBrowser": "chrome",
	"editor.formatOnSave": true,
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"window.zoomLevel": -3,
	"files.autoSave": "afterDelay",
	// "editor.fontLigatures": false,
	"terminal.integrated.fontFamily": "MesloLGS NF",
	"update.showReleaseNotes": false,
	"liveSassCompile.settings.formats": [
		{
			"format": "compressed",
			"extensionName": ".min.css",
			"savePath": "~/../css"
			// "savePathReplacementPairs": null
		}
	],
	"liveSassCompile.settings.autoprefix": ["> 1%", "last 2 versions"],

	"git.confirmSync": false,
	"editor.renderWhitespace": "all",
	"liveServer.settings.CustomBrowser": "chrome",
	"liveServer.settings.donotShowInfoMsg": true,
	"liveServer.settings.ChromeDebuggingAttachment": true,
	"livePreview.debugOnExternalPreview": true,
	"liveServer.settings.fullReload": true,
	"emmet.preferences": {
		"output.reverseAttributes": true
	},
	"prisma.showPrismaDataPlatformNotification": false,
	"liveServer.settings.mount": [],
	"liveSassCompile.settings.showOutputWindowOn": "None",
	"[sass]": {
		"editor.defaultFormatter": "syler.sass-indented"
	}
}
