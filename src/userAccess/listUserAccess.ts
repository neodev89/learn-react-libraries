interface userProps {
    id: number;
    email: string;
    password: string;
}

export const listUser: userProps[] = [
    {
        id: 1,
        email: 'amazzachemazza@mazza.it',
        password: 'bulachebula'
    },
    {
        id: 2,
        email: 'bula@ta.da',
        password: '0123456'
    }
];

export const fetcher = async (): Promise<userProps[]> => {
    return listUser;
}