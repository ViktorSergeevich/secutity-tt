/// <reference types="vite/client" />


// Базовая сущность
type TEntity = {
    id: number;
    title: string;
}

type TUser = {
    id: number;
    active: boolean;
    name: string;
    company: TEntity;
    position: TEntity;
    department: TEntity;
    avatar: string;
}
