import { TUser } from '@/types';

const sortUsersByRegistrationTimestamp = <T extends TUser>(users: T[]): T[] => {
	return [...users].sort((a, b) => {
		return b.registration_timestamp - a.registration_timestamp;
	});
};

export default sortUsersByRegistrationTimestamp;
