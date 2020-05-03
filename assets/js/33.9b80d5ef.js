(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{343:function(a,t,e){"use strict";e.r(t);var s=e(33),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"quick-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[a._v("#")]),a._v(" Quick Start")]),a._v(" "),e("h2",{attrs:{id:"convert-a-whole-directory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#convert-a-whole-directory"}},[a._v("#")]),a._v(" Convert a whole directory")]),a._v(" "),e("p",[a._v("just the files in a directory, it's not recursive")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("tailwindo path/to/directory/ \n")])])]),e("h2",{attrs:{id:"recursively-convert-a-whole-directory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#recursively-convert-a-whole-directory"}},[a._v("#")]),a._v(" Recursively convert a whole directory")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("tailwindo path/to/directory/ --recursive"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n")])])]),e("p",[a._v("You can also use the short hand "),e("code",[a._v("-r true")]),a._v(" instead of the full "),e("code",[a._v("--recursive=true")])]),a._v(" "),e("h2",{attrs:{id:"convert-different-file-extensions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#convert-different-file-extensions"}},[a._v("#")]),a._v(" Convert different file extensions")]),a._v(" "),e("p",[a._v("This will allow you to upgrade your "),e("code",[a._v("vue")]),a._v(" files, "),e("code",[a._v("twig")]),a._v(" files, and more!")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("tailwindo path/to/directory/ --extensions"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("vue,php,html\n")])])]),e("p",[a._v("You can also use the short hand "),e("code",[a._v("-e vue,php,html")]),a._v(" instead of the full "),e("code",[a._v("--extensions")])]),a._v(" "),e("h2",{attrs:{id:"overwrite-the-original-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overwrite-the-original-files"}},[a._v("#")]),a._v(" Overwrite the original files")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("tailwindo path/to/directory/ --replace"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[a._v("TIP")]),a._v(" "),e("p",[a._v("Please note this can be considered a destructive action as it will replace the original file and will not leave a copy of the original any where.")])]),a._v(" "),e("h2",{attrs:{id:"convert-one-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#convert-one-file"}},[a._v("#")]),a._v(" Convert one file")]),a._v(" "),e("p",[a._v("By default this will copy the code into a new file like file.html -> file.tw.html")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("tailwindo file.blade.php\n")])])]),e("p",[a._v("This option works with the "),e("code",[a._v("--replace=true")]),a._v(" option too.")]),a._v(" "),e("h2",{attrs:{id:"convert-raw-code-a-snippet-of-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#convert-raw-code-a-snippet-of-code"}},[a._v("#")]),a._v(" Convert raw code (a snippet of code)")]),a._v(" "),e("p",[a._v("just CSS classes:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("tailwindo "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'alert alert-info'")]),a._v("\n")])])]),e("p",[a._v("Or html:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("tailwindo "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'<div class=\"alert alert-info mb-2 mt-3\">hi</div>'")]),a._v("\n")])])]),e("h2",{attrs:{id:"extract-changes-to-a-single-css-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extract-changes-to-a-single-css-file"}},[a._v("#")]),a._v(" Extract changes to a single CSS file")]),a._v(" "),e("p",[a._v("Extract changes as components to a separate css file (tailwindo-components.css).")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("tailwindo --components"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true  path/to/directory/ \n")])])]),e("p",[a._v("For example if you have a file called demo.html and contains:")]),a._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("div")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("class")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("alert alert-info mb-2 mt-3"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("Love is a chemical reaction, soul has nothing to do with it."),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),e("p",[a._v("and runs:")]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("tailwindo --components"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true demo.html\n")])])]),e("p",[a._v("then Tailwindo will not change demo.html and create a CSS file called 'tailwindo-components.css' that contains:")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v(".alert {\n\t@apply relative px-3 py-3 mb-4 border rounded;\n}\n.alert-info {\n\t@apply bg-teal-200 bg-teal-300 bg-teal-800;\n}\n")])])]),e("p",[a._v("This will let you keep older markup unchanged and you can just add the new extract components to your main css file.")]),a._v(" "),e("h3",{attrs:{id:"supported-frameworks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supported-frameworks"}},[a._v("#")]),a._v(" Supported Frameworks")]),a._v(" "),e("p",[a._v("You can specify what CSS framework your code is written in, by using"),e("code",[a._v("framework")]),a._v(" option in the command line.")]),a._v(" "),e("h4",{attrs:{id:"currently-we-support-these-frameworks"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#currently-we-support-these-frameworks"}},[a._v("#")]),a._v(" Currently we support these frameworks:")]),a._v(" "),e("ul",[e("li",[a._v("Bootstrap")])]),a._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[a._v("tailwindo --framework"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("bootstrap demo.html\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);