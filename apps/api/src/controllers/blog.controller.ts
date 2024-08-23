import { createBlogService } from '@/services/blog/create-blog.service';
import { getBlogService } from '@/services/blog/get-blog.service';
import { getBlogsService } from '@/services/blog/get-blogs.services';
import { NextFunction, Request, Response } from 'express';

export class BlogController {
  async getBlogs(req: Request, res: Response, next: NextFunction) {
    try {
      const query = {
        page: parseInt(req.query.page as string) || 1,
        take: parseInt(req.query.take as string) || 2,
        sortOrder: (req.query.sortOrder as string) || 'desc',
        sortBy: (req.query.sortBy as string) || 'createdAt',
        search: (req.query.search as string) || '',
      };
      const result = await getBlogsService(query);
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async createBlog(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await createBlogService(
        req.body,
        req.file!,
        Number(res.locals.user.id),
      );
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }

  async getBlog(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await getBlogService(Number(req.params.id));
      return res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}
