"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NetworkError extends Error {
    constructor(response) {
        super(response.data.message || 'A network error has occured.');
        this.name = this.constructor.name;
        this.response = response;
    }
}
exports.default = NetworkError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV0d29ya0Vycm9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JlZHV4LXByb2Nlc3MvZXJyb3JzL05ldHdvcmtFcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLE1BQXFCLFlBQWEsU0FBUSxLQUFLO0lBRzdDLFlBQVksUUFBdUI7UUFDakMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLDhCQUE4QixDQUFDLENBQUE7UUFFOUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQTtRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQTtJQUMxQixDQUFDO0NBQ0Y7QUFURCwrQkFTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV0d29ya0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICByZXNwb25zZTogQXhpb3NSZXNwb25zZVxuXG4gIGNvbnN0cnVjdG9yKHJlc3BvbnNlOiBBeGlvc1Jlc3BvbnNlKSB7XG4gICAgc3VwZXIocmVzcG9uc2UuZGF0YS5tZXNzYWdlIHx8ICdBIG5ldHdvcmsgZXJyb3IgaGFzIG9jY3VyZWQuJylcblxuICAgIHRoaXMubmFtZSA9IHRoaXMuY29uc3RydWN0b3IubmFtZVxuICAgIHRoaXMucmVzcG9uc2UgPSByZXNwb25zZVxuICB9XG59XG4iXX0=