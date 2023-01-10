CREATE TABLE product(
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    title varchar(65) not null,
    price int not null
);

CREATE TABLE like(
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id uuid,
    product_id uuid,
    
)