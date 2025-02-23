import HttpService from 'src/core/services/http.service';

class ContentService extends HttpService {}

export const contentService = new ContentService('contents');
