/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\r\n    font: 16px Arial, sans-serif;\r\n}\r\nheader{\r\n    background-color: #dbdde2;\r\n    width: 15%;\r\n    left: 0;\r\n    top: 0;\r\n    position: fixed;\r\n    height: 100%;\r\n    padding: 20px;\r\n    \r\n}\r\nheader h1 {\r\n    font-size: 24px;\r\n    margin-bottom: 20px;\r\n}\r\nheader button {\r\n    display: block;\r\n    margin: 5px 0;\r\n    padding: 10px;\r\n    background-color: #f0f0f0;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\nmain {\r\n    margin-left: 17%; /* Same width as the header */\r\n    padding: 20px;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Project: () => (/* binding */ Project),\n/* harmony export */   Projects: () => (/* binding */ Projects),\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   createProjectModal: () => (/* binding */ createProjectModal)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\r\n\r\n\r\nconst Projects = [];\r\nclass Project {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.dueDate = null; // Optional due date for the project\r\n        this.tasks = [];\r\n        this.id = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.createID)(); // Generate a unique ID for the project\r\n    }\r\n\r\n    addTask(title, description, dueDate, priority, id, status) {\r\n        const task = new _task_js__WEBPACK_IMPORTED_MODULE_0__.todoStatus(\r\n            title,\r\n            description,\r\n            dueDate,\r\n            priority,\r\n            id = (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.createID)(), // Generate a unique ID for the task\r\n            status = \"pending\" // Default status\r\n        );\r\n        this.tasks.push(task);\r\n        return task;\r\n    }\r\n\r\n    removeTask(taskId) {\r\n        this.tasks = this.tasks.filter(task => task.id !== taskId);\r\n    }\r\n\r\n    getTasks() {\r\n        return this.tasks;\r\n    }\r\n}\r\n\r\nfunction createProjectModal() {\r\n    const modal = document.createElement(\"div\");\r\n    modal.classList.add(\"data-open-modal\");\r\n    modal.innerHTML = `\r\n        <dialog data-project-modal>\r\n            <form id=\"Project-form\">\r\n                <h3>Create a new Project</h3>\r\n                <label for=\"title\">Title:</label>\r\n                <input type=\"text\" id=\"titleProject\" name=\"titleProject\" required>\r\n                <label for=\"dueDate\">Due Date:</label>\r\n                <input type=\"date\" id=\"dueDateProject\" name=\"dueDateProject\">\r\n                <button type=\"submit\" class=\"submitProject\">Add To-Do</button>\r\n               <button type=\"reset\" class=\"resetProject\">Reset</button>\r\n            </form>\r\n            <button data-close-project-modal>Close</button>\r\n        </dialog>\r\n    `;\r\n    document.body.appendChild(modal);\r\n\r\n    // Cerrar modal de proyecto\r\n    const dialog = modal.querySelector(\"[data-project-modal]\");\r\n    const closeBtn = modal.querySelector(\"[data-close-project-modal]\");\r\n    closeBtn.addEventListener(\"click\", () => dialog.close());\r\n    dialog.addEventListener(\"click\", (e) => {\r\n        if (e.target === dialog) dialog.close();\r\n    });\r\n}\r\n\r\nfunction createProject(onCreateCallback) {\r\n    const form = document.querySelector(\"#Project-form\");\r\n    form.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        const name = form.elements[\"titleProject\"].value;\r\n        const dueDate = form.elements[\"dueDateProject\"].value;\r\n        const newProject = new Project(name);\r\n        if (dueDate) {\r\n            newProject.dueDate = dueDate;\r\n        }\r\n        Projects.push(newProject);\r\n        form.reset();\r\n        if (onCreateCallback) onCreateCallback();\r\n\r\n        const projectContaiener = document.querySelector(\"#project-container\");\r\n        const projectCard = document.createElement(\"div\");\r\n        projectCard.classList.add(\"project-card\");\r\n\r\n        projectCard.innerHTML = `\r\n            <h3>${newProject.name}</h3>\r\n            <p>Due Date: ${newProject.dueDate || \"No due date\"}</p>\r\n            <button class=\"add-task-to-project\" data-project-id=\"${newProject.id}\">Add Task</button>\r\n            <ul id=\"task-list-${newProject.id}\"></ul>\r\n        `;\r\n        projectContaiener.appendChild(projectCard);\r\n        projectCard.querySelector(\".add-task-to-project\").addEventListener(\"click\", () => {\r\n            const title = prompt(\"Task title:\");\r\n            const description = prompt(\"Task description:\");\r\n            const dueDate = prompt(\"Task due date (YYYY-MM-DD):\");\r\n            const priority = prompt(\"Priority (low, medium, high):\");\r\n\r\n            if (title) {\r\n                const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__.todoStatus(title, description, dueDate, priority, crypto.randomUUID(), \"pending\");\r\n                newProject.addTask(newTask); // Agrega a ese proyecto\r\n\r\n                // Mostrar la tarea en el UI\r\n                const taskList = projectCard.querySelector(`#task-list-${newProject.id}`);\r\n                const li = document.createElement(\"li\");\r\n                li.textContent = `${newTask.title} - ${newTask.description} - ${newTask.dueDate} - ${newTask.priority} - ${newTask.status}`;\r\n                const statusSelect = newTask.toggleStatus();\r\n                li.appendChild(statusSelect);\r\n                taskList.appendChild(li);\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/Project.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n// src/index.js\r\n\r\n\r\n\r\n\r\n// Initialize the To-Do List application\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.createmodalToDo)();\r\n    (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.displayModal)();\r\n    (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.createToDo)(displayTodayToDos); // Pass the displayTodayToDos function to createToDo\r\n    displayTodayToDos();// Display today's tasks on load\r\n\r\n    (0,_Project_js__WEBPACK_IMPORTED_MODULE_1__.createProjectModal)(); \r\n\r\n    // Espera a que el modal esté en el DOM antes de inicializar el formulario\r\n    (0,_Project_js__WEBPACK_IMPORTED_MODULE_1__.createProject)();\r\n\r\n    document.getElementById(\"add-project\").addEventListener(\"click\", () => {\r\n        // Selecciona el dialog correctamente\r\n        const projectDialog = document.querySelector('[data-project-modal]');\r\n        if (projectDialog) {\r\n            projectDialog.showModal();\r\n        } else {\r\n            console.error(\"No se encontró el modal de proyectos en el DOM.\");\r\n        }\r\n    });\r\n\r\n    displayProjects(); // Display existing projects on load\r\n});\r\n\r\nfunction displayTodayToDos() {\r\n    const today = new Date().toISOString().split('T')[0];\r\n    const todayTasks = _task_js__WEBPACK_IMPORTED_MODULE_0__.ToDos.filter(task => task.dueDate === today);\r\n    const taskList = document.querySelector(\"#task-listToday\");\r\n    taskList.innerHTML = \"\"; // Clear existing tasks\r\n    todayTasks.forEach(task => {\r\n        const listItem = document.createElement(\"li\");\r\n        const text = document.createTextNode(\r\n            `${task.title} - ${task.description} - (Due: ${task.dueDate}) - Priority: ${task.priority} - Status: `\r\n        );\r\n        const deleteButton = document.createElement(\"button\");\r\n        deleteButton.classList.add(\"delete-task\");\r\n        deleteButton.dataset.taskId = task.id; // Set the task ID for deletion\r\n        deleteButton.textContent = \"Delete\";\r\n        listItem.appendChild(text);\r\n        const statusSelect = task.toggleStatus();\r\n        listItem.appendChild(statusSelect);\r\n        taskList.appendChild(listItem);\r\n        listItem.appendChild(deleteButton);\r\n       \r\n    }); \r\n    (0,_task_js__WEBPACK_IMPORTED_MODULE_0__.setupDeleteListener)(displayTodayToDos); // Set up delete listeners for each task\r\n}\r\nfunction displayProjects() {\r\n    const projectList = document.querySelector(\"#project-list\");\r\n    projectList.innerHTML = \"\"; // Clear existing projects\r\n    _Project_js__WEBPACK_IMPORTED_MODULE_1__.Projects.forEach(project => {\r\n        const listItem = document.createElement(\"li\");\r\n        listItem.textContent = project.name;\r\n        const deleteButton = document.createElement(\"button\");\r\n        deleteButton.classList.add(\"delete-project\");\r\n        deleteButton.dataset.projectId = project.id; // Set the project ID for deletion\r\n        deleteButton.textContent = \"Delete\";\r\n        listItem.appendChild(deleteButton);\r\n        projectList.appendChild(listItem);\r\n    });\r\n    setupProjectDeleteListener(); // Set up delete listeners for each project\r\n}\r\n\r\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?\n}");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: () => (/* binding */ Task),\n/* harmony export */   ToDos: () => (/* binding */ ToDos),\n/* harmony export */   addTaskToList: () => (/* binding */ addTaskToList),\n/* harmony export */   createID: () => (/* binding */ createID),\n/* harmony export */   createToDo: () => (/* binding */ createToDo),\n/* harmony export */   createmodalToDo: () => (/* binding */ createmodalToDo),\n/* harmony export */   displayModal: () => (/* binding */ displayModal),\n/* harmony export */   setupDeleteListener: () => (/* binding */ setupDeleteListener),\n/* harmony export */   todoStatus: () => (/* binding */ todoStatus)\n/* harmony export */ });\n\r\nconst ToDos = [];\r\n/**\r\n * Represents a Task with a title, description, due date, priority, and status.\r\n */\r\nclass Task {\r\n    constructor(title, description, dueDate, priority, id) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = dueDate;\r\n        this.priority = priority;\r\n        this.id = id\r\n    }\r\n}\r\nclass todoStatus extends Task {\r\n    constructor(title, description, dueDate, priority, id, status) {\r\n        super(title, description, dueDate, priority, id);\r\n        this.status = status;\r\n    }\r\n    toggleStatus() {\r\n        const status = document.createElement(\"select\");\r\n        status.innerHTML = `\r\n            <option value=\"pending\">Pending</option>\r\n            <option value=\"in-progress\">In Progress</option>\r\n            <option value=\"completed\">Completed</option>\r\n        `;\r\n        status.value = this.status;\r\n        status.addEventListener(\"change\", (e) => {\r\n            this.status = e.target.value;\r\n        });\r\n        return status;\r\n    }\r\n}\r\nfunction addTaskToList(task) {\r\n    ToDos.push(task);\r\n}\r\n\r\nfunction createID() {\r\n    return (window.crypto && crypto.randomUUID) ? crypto.randomUUID() : Date.now().toString();\r\n}\r\nfunction createmodalToDo() {\r\n    const modal = document.createElement(\"div\");\r\n    modal.classList.add(\"data-open-modal\");\r\n    modal.innerHTML = `\r\n        <dialog data-modal>\r\n            <form id=\"todo-form\">\r\n                <h3>Create a new To-Do</h3>\r\n                <label for=\"title\">Title:</label>\r\n                <input type=\"text\" id=\"title\" name=\"title\" required>\r\n                <label for=\"description\">Description:</label>\r\n                <textarea id=\"description\" name=\"description\"></textarea>\r\n                <label for=\"dueDate\">Due Date:</label>\r\n                <input type=\"date\" id=\"dueDate\" name=\"dueDate\">\r\n                <label for=\"priority\">Priority:</label>\r\n                <select id=\"priority\" name=\"priority\">\r\n                    <option value=\"low\">Low</option>\r\n                    <option value=\"medium\">Medium</option>\r\n                    <option value=\"high\">High</option>\r\n                </select>\r\n                <button type=\"submit\" class=\"submitToDo\">Add To-Do</button>\r\n               <button type=\"reset\" class=\"resetToDo\">Reset</button>\r\n            </form>\r\n            <button data-close-modal>Close</button>\r\n        </dialog>\r\n    `;\r\n    document.body.appendChild(modal);\r\n}\r\nfunction setupDeleteListener(onDeleteCallback) {\r\n    const deleteButtons = document.querySelectorAll(\".delete-task\");\r\n    deleteButtons.forEach(button => {\r\n        button.addEventListener(\"click\", (e) => {\r\n            const taskId = e.target.dataset.taskId;\r\n            const taskIndex = ToDos.findIndex(task => task.id === taskId);\r\n            if (taskIndex !== -1) {\r\n                ToDos.splice(taskIndex, 1);\r\n                if(onDeleteCallback) onDeleteCallback();\r\n            }\r\n        });\r\n    });\r\n}\r\n\r\nfunction createToDo(onCreateCallback) {\r\n    const form = document.querySelector(\"#todo-form\");\r\n    form.addEventListener(\"submit\", (e) => {\r\n        e.preventDefault();\r\n        const title = form.elements[\"title\"].value;\r\n        const description = form.elements[\"description\"].value;\r\n        const dueDate = form.elements[\"dueDate\"].value;\r\n        const priority = form.elements[\"priority\"].value;\r\n        const status = \"pending\"; // Default status\r\n        const newTask = new todoStatus(\r\n            title,\r\n            description,\r\n            dueDate,\r\n            priority,\r\n            createID(), // Generate a unique ID for the task\r\n            status\r\n        );\r\n        form.reset();\r\n        document.querySelector(\"[data-modal]\").close();\r\n        addTaskToList(newTask);\r\n        if (onCreateCallback) onCreateCallback();\r\n        setupDeleteListener(); // Set up delete listeners after adding a new task\r\n    });\r\n}\r\n\r\nfunction displayModal() {\r\n    const modal = document.querySelector(\"[data-modal]\");\r\n    const openModal = document.querySelector(\"#AddTo-Do\");\r\n    const closeModal = document.querySelector(\"[data-close-modal]\");\r\n\r\n    openModal.addEventListener(\"click\", () => {\r\n        modal.showModal();\r\n    });\r\n    closeModal.addEventListener(\"click\", () => {\r\n        modal.close();\r\n    });\r\n    modal.addEventListener(\"click\", (e) => {\r\n        if (e.target === modal) {\r\n            modal.close();\r\n        }\r\n    });\r\n}\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    createmodalToDo();\r\n    displayModal();\r\n});\r\n\n\n//# sourceURL=webpack://to-do-list/./src/task.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;