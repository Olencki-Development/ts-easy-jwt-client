"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EasyJWTNetworker = void 0;
const EasyJWTTokenManager_1 = require("./EasyJWTTokenManager");
class EasyJWTNetworker {
    constructor(options) {
        this.options = options;
        this._tokenManager = new EasyJWTTokenManager_1.EasyJWTTokenManager();
    }
    async execute(request, data = {}) {
        let response = await request.send(data);
        if (response.status === 403) {
            const didUpdateAccessToken = await this._refreshAccessToken();
            if (didUpdateAccessToken) {
                response = await request.send(data);
            }
        }
        return response;
    }
    async _refreshAccessToken() {
        if (!this.options.refreshRequest) {
            return false;
        }
        const response = await this.options.refreshRequest.send({
            refreshToken: this._tokenManager.getRefreshToken()
        });
        if (response.status === 200) {
            this._tokenManager.setAccessToken(response.data.tokens.access);
            if (response.data.tokens.refresh) {
                this._tokenManager.setRefreshToken(response.data.tokens.refresh);
            }
            return true;
        }
        return false;
    }
}
exports.EasyJWTNetworker = EasyJWTNetworker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWFzeUpXVE5ldHdvcmtlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9FYXN5SldUTmV0d29ya2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBLCtEQUEyRDtBQUczRCxNQUFhLGdCQUFnQjtJQUkzQixZQUFZLE9BQWdDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3RCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSx5Q0FBbUIsRUFBRSxDQUFBO0lBQ2hELENBQUM7SUFFRCxLQUFLLENBQUMsT0FBTyxDQUNYLE9BQXdCLEVBQ3hCLE9BQTRCLEVBQUU7UUFFOUIsSUFBSSxRQUFRLEdBQUcsTUFBTSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZDLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7WUFDM0IsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFBO1lBQzdELElBQUksb0JBQW9CLEVBQUU7Z0JBQ3hCLFFBQVEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDcEM7U0FDRjtRQUVELE9BQU8sUUFBUSxDQUFBO0lBQ2pCLENBQUM7SUFFUyxLQUFLLENBQUMsbUJBQW1CO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRTtZQUNoQyxPQUFPLEtBQUssQ0FBQTtTQUNiO1FBRUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUM7WUFDdEQsWUFBWSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxFQUFFO1NBQ25ELENBQUMsQ0FBQTtRQUVGLElBQUksUUFBUSxDQUFDLE1BQU0sS0FBSyxHQUFHLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUE7WUFFOUQsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO2FBQ2pFO1lBRUQsT0FBTyxJQUFJLENBQUE7U0FDWjtRQUVELE9BQU8sS0FBSyxDQUFBO0lBQ2QsQ0FBQztDQUNGO0FBN0NELDRDQTZDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVhc3lKV1ROZXR3b3JrZXJPcHRpb25zIH0gZnJvbSAnLi90eXBlcy9FYXN5SldUTmV0d29ya2VyJ1xuaW1wb3J0IHsgSUVhc3lKV1ROZXR3b3JrZXIgfSBmcm9tICcuL2ludGVyZmFjZXMvSUVhc3lKV1ROZXR3b3JrZXInXG5pbXBvcnQgeyBJRWFzeUpXVFJlcXVlc3QgfSBmcm9tICcuL2ludGVyZmFjZXMvSUVhc3lKV1RSZXF1ZXN0J1xuaW1wb3J0IHsgRWFzeUpXVFRva2VuTWFuYWdlciB9IGZyb20gJy4vRWFzeUpXVFRva2VuTWFuYWdlcidcbmltcG9ydCB7IEF4aW9zUmVzcG9uc2UgfSBmcm9tICdheGlvcydcblxuZXhwb3J0IGNsYXNzIEVhc3lKV1ROZXR3b3JrZXIgaW1wbGVtZW50cyBJRWFzeUpXVE5ldHdvcmtlciB7XG4gIG9wdGlvbnM6IEVhc3lKV1ROZXR3b3JrZXJPcHRpb25zXG4gIHByb3RlY3RlZCBfdG9rZW5NYW5hZ2VyOiBFYXN5SldUVG9rZW5NYW5hZ2VyXG5cbiAgY29uc3RydWN0b3Iob3B0aW9uczogRWFzeUpXVE5ldHdvcmtlck9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zXG4gICAgdGhpcy5fdG9rZW5NYW5hZ2VyID0gbmV3IEVhc3lKV1RUb2tlbk1hbmFnZXIoKVxuICB9XG5cbiAgYXN5bmMgZXhlY3V0ZShcbiAgICByZXF1ZXN0OiBJRWFzeUpXVFJlcXVlc3QsXG4gICAgZGF0YTogUmVjb3JkPHN0cmluZywgYW55PiA9IHt9XG4gICk6IFByb21pc2U8QXhpb3NSZXNwb25zZT4ge1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3Quc2VuZChkYXRhKVxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMykge1xuICAgICAgY29uc3QgZGlkVXBkYXRlQWNjZXNzVG9rZW4gPSBhd2FpdCB0aGlzLl9yZWZyZXNoQWNjZXNzVG9rZW4oKVxuICAgICAgaWYgKGRpZFVwZGF0ZUFjY2Vzc1Rva2VuKSB7XG4gICAgICAgIHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5zZW5kKGRhdGEpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH1cblxuICBwcm90ZWN0ZWQgYXN5bmMgX3JlZnJlc2hBY2Nlc3NUb2tlbigpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5yZWZyZXNoUmVxdWVzdCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLm9wdGlvbnMucmVmcmVzaFJlcXVlc3Quc2VuZCh7XG4gICAgICByZWZyZXNoVG9rZW46IHRoaXMuX3Rva2VuTWFuYWdlci5nZXRSZWZyZXNoVG9rZW4oKVxuICAgIH0pXG5cbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcbiAgICAgIHRoaXMuX3Rva2VuTWFuYWdlci5zZXRBY2Nlc3NUb2tlbihyZXNwb25zZS5kYXRhLnRva2Vucy5hY2Nlc3MpXG5cbiAgICAgIGlmIChyZXNwb25zZS5kYXRhLnRva2Vucy5yZWZyZXNoKSB7XG4gICAgICAgIHRoaXMuX3Rva2VuTWFuYWdlci5zZXRSZWZyZXNoVG9rZW4ocmVzcG9uc2UuZGF0YS50b2tlbnMucmVmcmVzaClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuIl19