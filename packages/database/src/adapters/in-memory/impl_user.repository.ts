import { CreateNewUserDTO } from '@ocmo/core/use-cases/register-user';
import { UserRepository } from '@ocmo/core/repositories/user.repositories';
import { User } from '@ocmo/core/entities/user.entities'

export const users: User[] = [{
    id: '1',
    name: 'jhon doe',
    group_id: '1',
    phone: '01232',
    role: 'user'
}]

export class InMemoryUserRepository implements UserRepository {
    findById(id: string): Promise<User | null> {


        return Promise.resolve(users.find(user => user.id == id) || null)
        throw new Error('Method not implemented')

    }

    findByNumber(number: string): Promise<User | null> {


        return Promise.resolve(users.find(user => user.phone == number) || null)

        throw new Error('Method not implemented')

    }


    create(dto: CreateNewUserDTO): Promise<User> {

        const user = {
            ...dto,
            id: crypto.randomUUID(),
            group_id: crypto.randomUUID()
        }

        return Promise.resolve(user)

        throw new Error('Method not implemented')

    }
}