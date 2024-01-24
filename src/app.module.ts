import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(`mongodb+srv://admin:QuQR9ah1y6UyMy1e@nestjs.0jdtfdi.mongodb.net/?retryWrites=true&w=majority`), UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
