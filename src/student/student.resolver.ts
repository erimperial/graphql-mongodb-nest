<<<<<<< HEAD
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
=======
import { Args, Mutation, Resolver } from '@nestjs/graphql';
>>>>>>> refs/remotes/origin/main
import { CreateStudentInput } from './create-student.input';
import { StudentType } from './student.type';
import { StudentService } from './student.service';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

<<<<<<< HEAD
  @Query((returns) => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  @Query((returns) => [StudentType])
  students() {
    return this.studentService.getStudents();
  }

=======
>>>>>>> refs/remotes/origin/main
  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
