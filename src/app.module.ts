import { UserController } from './users/user.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './users/user.service';
import { CategoryModule } from './category/category.module';
import { CategoryController } from './category/category.controller';

@Module({
  imports: [CategoryModule],
  controllers: [AppController, UserController, CategoryController],
  providers: [AppService, UserService],
})
export class AppModule {}
