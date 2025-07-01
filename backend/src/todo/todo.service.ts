import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Update path if needed
import { Todo } from '@prisma/client';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) { }

  async create(title: string): Promise<Todo> {
    return this.prisma.todo.create({
      data: { title },
    });
  }

  async findAll(): Promise<Todo[]> {
    return this.prisma.todo.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async toggle(id: number): Promise<Todo> {
    const existing = await this.prisma.todo.findUnique({ where: { id } });
    if (!existing) throw new Error('Todo not found');

    return this.prisma.todo.update({
      where: { id },
      data: {
        completed: !existing.completed,
      },
    });
  }


  async update(id: number, title: string): Promise<Todo> {
    return this.prisma.todo.update({
      where: { id },
      data: { title },
    });
  }

  async delete(id: number): Promise<Todo> {
    return this.prisma.todo.delete({ where: { id } });
  }
}
