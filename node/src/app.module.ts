import { Module } from "@nestjs/common";
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { UserModule } from "./user/user.module";
import { MongooseModule } from "@nestjs/mongoose";
import { LoginModule } from './login/login.module';

@Module({
  //imports: [UserModule],
  imports: [
    UserModule,
    MongooseModule.forRoot(
      "mongodb+srv://oliabarovskaya_db_user:pIbIL7OUntV2PAkx@clusterweatherdata.in6geyu.mongodb.net/?appName=ClusterWeatherData"
    ),
    LoginModule,
  ],
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
