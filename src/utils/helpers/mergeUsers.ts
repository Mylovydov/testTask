import { TQueryFnData } from '@/services';
import { TUser } from '@/types';

const mergeUsers = (groups: TQueryFnData[]) =>
	groups.reduce<TUser[]>((acc, { users }) => [...acc, ...users], []);

export default mergeUsers;
