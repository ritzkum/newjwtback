import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [ 
    // ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb+srv://Api:LoginAuth@cluster0.l4sf0uk.mongodb.net/?retryWrites=true&w=majority'), UserModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
