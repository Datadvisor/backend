import { IsString } from 'class-validator';

export class ContactEmailDTO {
	@IsString({ message: 'You need to enter a subject.' })
	subject!: string;

	@IsString({ message: 'You need to enter a text.' })
	text!: string;
}
