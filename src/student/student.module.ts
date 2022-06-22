import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { StudentResolver } from './student.resolver';
import { StudentService } from './student.service';

@Module({
  providers: [StudentResolver, StudentService],
  imports: [TypeOrmModule.forFeature([Student])],
<<<<<<< HEAD
  exports: [StudentService],
=======
>>>>>>> refs/remotes/origin/main
})
export class StudentModule {}
