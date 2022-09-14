import {User} from 'src/API';
export type IEditableUserFields = 'username' | 'bio' | 'website' | 'name';

//pick toma una interfaz y selecciona las keys que seteemos nosotros en el segundo parametro
export type IEditableUser = Pick<User, IEditableUserFields>;
