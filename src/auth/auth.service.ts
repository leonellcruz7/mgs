import { Injectable } from '@nestjs/common';
import { FirebaseRepository } from 'src/firebase/firebase.repository';
import * as admin from 'firebase-admin';

@Injectable()
export class AuthService {
  constructor(private firebaseRepository: FirebaseRepository) {}

  async signup(): Promise<any> {
    return await this.firebaseRepository.collection.add({
      email: 'test',
      password: 'test',
    });
  }
}
