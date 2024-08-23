import prisma from '@/prisma';
import { PaginationQueryParams } from '@/types/pagination';
import { Prisma } from '@prisma/client';

interface GetBlogsQuery extends PaginationQueryParams {
  search: string;
}

export const getBlogsService = async (query: GetBlogsQuery) => {
  try {
    const { page, take, sortBy, sortOrder, search } = query;

    const whereClause: Prisma.BlogWhereInput = {};

    if (search) {
      whereClause.title = {
        contains: search,
      };
    }

    const events = await prisma.blog.findMany({
      where: { title: { contains: search } },
      skip: (page - 1) * take,
      take: take,
      orderBy: { [sortBy]: sortOrder },
      include: { user: { select: { name: true } } },
    });

    const count = await prisma.blog.count();

    return {
      data: events,
      meta: { page, take, total: count },
    };
  } catch (error) {
    throw error;
  }
};
