"use strict";
const api_1 = require("../api");
function initRestApi(app) {
    app.route('/api/courses').get(api_1.apiGetAllCourses);
    app.route('/api/courses/:id').get(api_1.apiGetCourse);
    app.route('/api/lesson').post(api_1.apiCreateLesson);
    app.route('/api/lesson/:id').patch(api_1.apiPatchLesson);
    app.route('/api/lesson/:id').delete(api_1.apiDeleteLesson);
}
exports.initRestApi = initRestApi;
//# sourceMappingURL=api.js.map