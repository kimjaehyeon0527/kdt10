create table customer (
custid char(10) primary key,
custname varchar(10) not null,
addr char(10) not null,
phone char(11),
birth date
);
desc customer;

-- INSERT 추가
insert into customer (custid, custname, addr, phone, birth)
values ('lucky', '강해원', '미국 뉴욕', '01022223333', '2002-10-05');

insert into customer (addr ,custid, custname, phone, birth)
values ('대한민국 부산' ,'happy', '이지은', '01022223333', '2002-10-05');

insert into customer
values('apple', '이지은', '대한민국 광주', '0102222333', '2002-10-05');

-- 여러 튜플 동시에 추가
insert into customer
values ('banana', '윤지성', '대한민국 광주', '0102222333', '2002-10-05'),
('orange', '박은빈', '대한민국 광주', '0102222333', '2002-10-05'),
('kiwi', '송강', '대한민국 광주', '0102222333', '2002-10-05'),
('grape', '김유정', '대한민국 광주', '0102222333', '2002-10-05');

INSERT INTO customer VALUES('bunny', '강해린', '대한민국 서울', '01012341234', '2000-02-23');
INSERT INTO customer VALUES('hello', '이지민', '대한민국 포항', '01022221234', '1999-08-08');
INSERT INTO customer VALUES('jisu', '최지수', '미국 뉴욕', '01050005000', '1990-12-25');
INSERT INTO customer VALUES('imminji01', '강민지', '영국 런던', '01060001000', '1995-01-11');
INSERT INTO customer VALUES('lalala', '홍수지', '미국 로스앤젤레스', '01010109090', '2007-05-16');
INSERT INTO customer VALUES('jjjeee', '홍은정', '대한민국 서울', '01099991111', '2004-08-17');
INSERT INTO customer VALUES('wow123', '이민혁', '일본 삿포로', '01011223344', '1994-05-31');
INSERT INTO customer VALUES('minjipark', '박민지', '프랑스 파리', '01088776655', '1998-04-08');
INSERT INTO customer VALUES('jy9987', '강지연', '일본 삿포로', '01012312323', '1996-09-01');

-- SELECT 조회
select * from customer;
select custid from customer;

-- < WHERE 조건 >
-- 비교: =, <>, <, <=, >, >=
-- 범위: BETWEEN
-- 집합: IN, NOT IN
-- 패턴: LIKE
-- NULL: IS NULL, IS NOT NULL
-- 복합 조건: AND, OR, NOT

-- 비교
-- 고객 이름이 강해린인 고객의 생일 검색
select birth from customer where custname='강해린';
-- 고객 이름이 강해린이 아닌 고객의 생일 검색
select birth from customer where custname!='강해린';
-- 사전순으로 박민지보다 뒤에 위치한 고객의 모든 정보 검색
select * from customer where custname > '박민지';

-- 범위
-- 1995년 이상 2000년 이하 출생 고객 검색
select * from customer where birth between '1995-01-01' and '2000-12-31';
select * from customer where birth >=  '1995-01-01' and birth <= '2000-12-31';

-- 집합
-- 주소가 서울 혹은 런던인 고객 검색
select * from customer where addr in ('대한민국 서울', '영국 런던');
select * from customer where addr = '대한민국 서울' or addr = '영국 런던';
-- 주소가 서울 혹은 런던이 아닌 고객 검색
select * from customer where addr not in ('대한민국 서울', '영국 런던');

-- 패턴
-- 주소가 '미국 로스앤젤레스'인 고객을 검색
select * from customer where addr like '미국 로스앤젤레스';

-- 주소가 '미국'이 포함되어 있는 고객 검색
-- %: 0개 이상의 문자열
select * from customer where addr like '미국%';

-- 고객 이름에 두번째 글자가 '지'인 고객 검색
-- _: 임의의 한글자(하나의) 문자를 의미
select * from customer where custname like '_지%';
select * from customer where custname like '_지'; -- 아무것도 안나온다. '_지' 인 사람만 검색
select * from customer where custname like '_지_'; -- 3글자인 사람이 검색 된다.

-- 고객 이름에 세번째 글자가 '수'인 고객 검색
select * from customer where custname like '__수%';
select * from customer where custname like '%수'; -- 이름이 몇자든, 마지막 글자가 '수'

-- 복합 조건 (AND, OR, NOT)
-- 주소지가 대한민국이고, 2000년 생 이후 출생 고객 검색
select * from customer where addr like '대한민국%' and birth >= '2000-01-01';
-- 주소지가 미국이거나 영국인 고객 검색
select * from customer where addr like '미국%' or addr like '영국%';
-- 휴대폰 번호 마지막 자리가 4가 아닌 고객 검색
select * from customer where phone not like '%4';

-- < ORDER BY >
-- order by : default 값은 pk(primary key) 기준 오름차순 정렬
select * from customer;
select * from customer order by custname;
select * from customer order by custname desc;

-- where 절과 order by 함께 사용 (단, 이때 order by가 where보다 뒤에 있어야함)
-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 검색
select * from customer where birth >= '2000-01-01' order by addr desc;
-- select * from customer order by addr desc where birth >= '2000-01-01'; -- error (구문 순서)

-- 2000년생 이후 출생자 중에서 주소를 기준으로 오름차순, 아이디를 기준으로 내림차순 검색
select * from customer where birth >= '2000-01-01' order by addr, custid desc;

-- < LIMIT >
-- 행의 개수를 제한
select * from customer limit 3;
select * from customer where birth >= '2000-01-01' limit 3;

-- < 집계 함수 >
-- 계산하여 어떤 값을 리턴하는 "함수"
-- group by 절과 같이 쓰이는 케이스가 많음.

-- order 테이블을 만들기
-- 외래키 갖고 있게 만들 것

-- 외래키 제약 조건
-- 다른 테이블의 기본키를 외래키로 연결
-- 기준 테이블 : 기본키를 갖는 테이블 (customer)
-- 참조 테이블 : 외래키가 있는 테이블 (order)
-- 형식 : FOREIGN KEY (열 이름) REFERENCES 기준 테이블(열 이름)
-- on update cascade : 기준 테이블의 데이터가 변경되면, 참조 테이블의 데이터도 변경.
-- on delete cascade : 기준 테이블의 데이터가 삭제되면, 참조 테이블의 데이터도 삭제.

create table orders (
	orderid int primary key auto_increment,
    custid char(10) not null, -- FK
    prodname char(6) not null,
    price int not null,
    amount smallint not null,
    foreign key (custid) references customer(custid) on update cascade on delete cascade
    );
    
-- 테이블을 삭제할 경우 삭제 순서!
-- customer table, orders table customer.custid를 기준으로 "관계"를 맺음.
-- customer table에 존재하는 회원만 orders tabled에 데이터를 추가 할 수 있음.
-- 만약에 orders 테이블이 있는데, customer 테이블을 삭제(drop)하면?
-- orders 테이블은 어떤 고객의 생일 정보를 알고 싶어도 customer 테이블 자체가 날라갔기 때문에, 알 수 없다.
-- pk-fk 연결된 테이블은 외래키가 설정된 테이블을 (참조 테이블) 먼저 삭제
-- (1) orders table 삭제 -> (2) customer 테이블 삭제

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

-- < 집계 함수 >
-- 계산하여 어떤 값을 리턴하는 "함수"
-- group by 절과 같이 쓰이는 케이스가 많음.

select * from orders;

-- 주문 테이블에서 상품의 총 판매 개수 검색
select sum(amount) from orders;

-- 주문 테이블에서 상품의 총 판매 개수 검색 + 의미있는 열 이름으로 변경
select sum(amount) as 'total_amount' from orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색
-- total_amount, avg_amount, min_price, max_price
select sum(amount) as 'total_amount', avg(amount) as 'avg_amount', 
min(price) as'min_price', max(price) as 'max_price' from orders;

-- 주문 테이블에서 총 주문 건수. (= orders 튜플 개수)
select count(*) from orders;

-- 주문 테이블에서 주문한 고객 수 (중복 없이, distinct: 중복 제거)
select count(distinct custid) from orders;

-- < GROUP BY >
-- "~별로"

-- 고객별로 주문한 주문 건수 검색
select custid, count(*) from orders group by custid;

-- 고객별로 주문한 상품 총 수량 검색
select custid, sum(amount) from orders group by custid;

-- 고객별로 주문한 총 주문액 구하기
select custid, sum(price * amount) from orders group by custid;

-- 상품별로 판매 개수 구하기
select prodname, sum(amount) from orders group by prodname;

-- < HAVING >
-- group by 절 이후에 추가 조건

-- 총 주문액이 10000원 이상인 고객에 대해서, 고객별로 주문한 상품 총 수량 구하기.
select custid, sum(amount), sum(price * amount) from orders 
group by custid 
having sum(price * amount) >= 10000;

-- where 버전 (err code 1111. : where 절은 개별 행에 대한 조건을 검사함)
-- select custid, sum(amount), sum(price * amount) from orders 
-- where sum(price * amount) >= 10000
-- group by custid ;

-- 위랑 동일한 조건 + 단, custid가 'bunny'인 고객은 제외.
-- where + group by + having 모두 사용한 예시 (순서 주의)
select custid, sum(amount), sum(price * amount) from orders 
where custid != 'bunny' 
group by custid 
having sum(price * amount) >= 10000;

select custid, sum(amount), sum(price * amount) from orders 
group by custid 
having sum(price * amount) >= 10000 and custid != 'bunny';

-- group by 주의 사항
-- select 절에서 group by 에서 사용한 속성과 집계함수만 사용 가능

/*
    where vs having

    having
    - 그룹에 대해서 필링 (그래서 group by와 함께 쓰임)
    - group by 보다 뒤에 위치
    - 집계 함수랑 같이 사용이 가능.

    where
    - 각각의 행을 필터링
    - group by 보다 앞에 위치
    - 집계 함수와 사용 X
*/

-- < ORDER BY >
-- order by : default 값은 pk(primary key) 기준 오름차순 정렬
select * from customer;
select * from customer order by custname;
select * from customer order by custname desc;

-- where 절과 order by 함께 사용 (단, 이때 order by가 where보다 뒤에 있어야함)
-- 2000년생 이후 출생자 중에서 주소를 기준으로 내림차순 검색
select * from customer where birth >= '2000-01-01' order by addr desc;
-- select * from customer order by addr desc where birth >= '2000-01-01'; -- error (구문 순서)

-- 2000년생 이후 출생자 중에서 주소를 기준으로 오름차순, 아이디를 기준으로 내림차순 검색
select * from customer where birth >= '2000-01-01' order by addr, custid desc;

-- < LIMIT >
-- 행의 개수를 제한
select * from customer limit 3;
select * from customer where birth >= '2000-01-01' limit 3;

-- < 집계 함수 >
-- 계산하여 어떤 값을 리턴하는 "함수"
-- group by 절과 같이 쓰이는 케이스가 많음.

-- order 테이블을 만들기
-- 외래키 갖고 있게 만들 것

-- 외래키 제약 조건
-- 다른 테이블의 기본키를 외래키로 연결
-- 기준 테이블 : 기본키를 갖는 테이블 (customer)
-- 참조 테이블 : 외래키가 있는 테이블 (order)
-- 형식 : FOREIGN KEY (열 이름) REFERENCES 기준 테이블(열 이름)
-- on update cascade : 기준 테이블의 데이터가 변경되면, 참조 테이블의 데이터도 변경.
-- on delete cascade : 기준 테이블의 데이터가 삭제되면, 참조 테이블의 데이터도 삭제.

create table orders (
	orderid int primary key auto_increment,
    custid char(10) not null, -- FK
    prodname char(6) not null,
    price int not null,
    amount smallint not null,
    foreign key (custid) references customer(custid) on update cascade on delete cascade
    );
    
-- 테이블을 삭제할 경우 삭제 순서!
-- customer table, orders table customer.custid를 기준으로 "관계"를 맺음.
-- customer table에 존재하는 회원만 orders tabled에 데이터를 추가 할 수 있음.
-- 만약에 orders 테이블이 있는데, customer 테이블을 삭제(drop)하면?
-- orders 테이블은 어떤 고객의 생일 정보를 알고 싶어도 customer 테이블 자체가 날라갔기 때문에, 알 수 없다.
-- pk-fk 연결된 테이블은 외래키가 설정된 테이블을 (참조 테이블) 먼저 삭제
-- (1) orders table 삭제 -> (2) customer 테이블 삭제

INSERT INTO orders VALUES(NULL, 'jy9987', '프링글스', 3500, 2);
INSERT INTO orders VALUES(NULL, 'kiwi', '새우깡', 1200, 1);
INSERT INTO orders VALUES(NULL, 'hello', '홈런볼', 4200, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '맛동산', 2400, 1);
INSERT INTO orders VALUES(NULL, 'bunny', '오감자', 1500, 4);
INSERT INTO orders VALUES(NULL, 'jjjeee', '양파링', 2000, 1);
INSERT INTO orders VALUES(NULL, 'hello', '자갈치', 1300, 2);
INSERT INTO orders VALUES(NULL, 'jjjeee', '감자깡', 1200, 4);
INSERT INTO orders VALUES(NULL, 'bunny', '죠리퐁', 1500, 3);
INSERT INTO orders VALUES(NULL, 'kiwi', '꼬깔콘', 1700, 2);
INSERT INTO orders VALUES(NULL, 'hello', '버터링', 4000, 2);
INSERT INTO orders VALUES(NULL, 'minjipark', '칙촉', 4000, 1);
INSERT INTO orders VALUES(NULL, 'wow123', '콘초', 1700, 3);
INSERT INTO orders VALUES(NULL, 'imminji01', '꼬북칩', 2000, 2);
INSERT INTO orders VALUES(NULL, 'bunny', '썬칩', 1800, 5);
INSERT INTO orders VALUES(NULL, 'kiwi', '고구마깡', 1300, 3);
INSERT INTO orders VALUES(NULL, 'jy9987', '오징어집', 1700, 5);
INSERT INTO orders VALUES(NULL, 'jjjeee', '바나나킥', 2000, 4);
INSERT INTO orders VALUES(NULL, 'imminji01', '초코파이', 5000, 2);

-- < 집계 함수 >
-- 계산하여 어떤 값을 리턴하는 "함수"
-- group by 절과 같이 쓰이는 케이스가 많음.

select * from orders;

-- 주문 테이블에서 상품의 총 판매 개수 검색
select sum(amount) from orders;

-- 주문 테이블에서 상품의 총 판매 개수 검색 + 의미있는 열 이름으로 변경
select sum(amount) as 'total_amount' from orders;

-- 주문 테이블에서 총 판매 개수, 평균 판매 개수, 상품 최저가, 상품 최고가 검색
-- total_amount, avg_amount, min_price, max_price
select sum(amount) as 'total_amount', avg(amount) as 'avg_amount', 
min(price) as'min_price', max(price) as 'max_price' from orders;

-- 주문 테이블에서 총 주문 건수. (= orders 튜플 개수)
select count(*) from orders;

-- 주문 테이블에서 주문한 고객 수 (중복 없이, distinct: 중복 제거)
select count(distinct custid) from orders;

-- < GROUP BY >
-- "~별로"

-- 고객별로 주문한 주문 건수 검색
select custid, count(*) from orders group by custid;

-- 고객별로 주문한 상품 총 수량 검색
select custid, sum(amount) from orders group by custid;

-- 고객별로 주문한 총 주문액 구하기
select custid, sum(price * amount) from orders group by custid;

-- 상품별로 판매 개수 구하기
select prodname, sum(amount) from orders group by prodname;

-- < HAVING >
-- group by 절 이후에 추가 조건

-- 총 주문액이 10000원 이상인 고객에 대해서, 고객별로 주문한 상품 총 수량 구하기.
select custid, sum(amount), sum(price * amount) from orders 
group by custid 
having sum(price * amount) >= 10000;

-- where 버전 (err code 1111. : where 절은 개별 행에 대한 조건을 검사함)
-- select custid, sum(amount), sum(price * amount) from orders 
-- where sum(price * amount) >= 10000
-- group by custid ;

-- 위랑 동일한 조건 + 단, custid가 'bunny'인 고객은 제외.
-- where + group by + having 모두 사용한 예시 (순서 주의)
select custid, sum(amount), sum(price * amount) from orders 
where custid != 'bunny' 
group by custid 
having sum(price * amount) >= 10000;

select custid, sum(amount), sum(price * amount) from orders 
group by custid 
having sum(price * amount) >= 10000 and custid != 'bunny';

-- group by 주의 사항
-- select 절에서 group by 에서 사용한 속성과 집계함수만 사용 가능

-- UPDATE
-- 수정 : update 테이블명 set 필드1=값1 where 필드2=조건2;
-- custid가 happy인 고객의 주소를 대한민국 서울로 변경.
update customer set addr = '대한민국 서울' where custid = 'happy';

select * from customer;

-- DELETE
-- 삭제 : delete from 테이블명 where 필드1=값1;
-- custid가 happy인 고객의 정보를 테이블에서 삭제.
delete from customer where custid = 'happy';

-- 고객 테이블에서 'kiwi'고객을 삭제했을 때, 주문 테이블에서 'kiwi'고객의 주문 정보가 함께 삭제되는지?
delete from customer where custid = 'kiwi';

select * from customer;
select * from orders;

-- 실습
create table user (
	id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender ENUM( 'F', 'M', ' ') default '',
    birthday DATE not null,
    age int(3) not null default 0
);
desc user;

INSERT INTO user VALUES('hong1234', '804bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user VALUES('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user VALUES('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
INSERT INTO user VALUES('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user VALUES('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', '47');
INSERT INTO user VALUES('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', '22');
INSERT INTO user VALUES('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', '24'); 

SELECT * from user;	

-- 1번
select * from user order by birthday;
-- 2번
select * from user where gender = 'M' order by name desc;
-- 3번
select id, name from user where birthday >= '1990-01-01' and birthday <= '1999-12-31';
-- select id, name from user where birthday like '199%';
-- 4번
select * from user where month(birthday) = '6' order by birthday;
-- select * from user where birthday like '%-06-%' order by birthday;
-- 5번
select * from user where gender = 'M' and birthday >= '1970-01-01' and birthday <= '1979-12-31';
-- select * from user where gender = 'M' and birhday like '197%';
-- 6번
select * from user order by age desc limit 3;
-- 7번
select * from user where age >= 25 and age <= 50;
-- select * from user where age between 25 and 50;
-- 8번
update user set pw='12345678' where id='hong1234';
-- 9번
delete from user where id='jungkrat';

-- JOIN
select * from customer, orders;

-- customer, order 테이블의 행 개수 구하기
select count(*) from customer; -- 14
select count(*) from orders;   -- 16
select count(*) from customer, orders; -- 224 = 14 * 16
-- => cross join

-- where절을 이용해서 조인의 조건을 추가 해준다.
-- 테이블이름.속성: 어느 테이블의 속성인지 가르킨다.
select * from customer, orders
where customer.custid = orders.custid;

select * from customer, orders
where customer.custid = orders.custid
order by customer.custname;

select * from customer inner join orders
on customer.custid = orders.custid;

-- "고객 이름"과 고객이 주문한 "상품명", "상품 가격" 조회
select custname, prodname, price from customer, orders
where customer.custid = orders.custid;

select custname, prodname, price from customer inner join orders
on customer.custid = orders.custid;

-- 고객의 이름별로 주문한 제품 총 구매액을 고객 별로 구매액 기준으로 오름차순 정렬
SELECT 
    custname, SUM(price * amount) AS 'total_price'
FROM
    customer,
    orders
WHERE
    customer.custid = orders.custid
GROUP BY custname
ORDER BY total_price;

SELECT 
    custname, SUM(price * amount) AS 'total_price'
FROM
    customer
        INNER JOIN
    orders ON customer.custid = orders.custid
GROUP BY custname
ORDER BY total_price;

-- OUTER JOIN
-- Outer Join은 공통된 부분만 결합하는 Inner Join과 다르게 공통되지 않은 row도 유지한다.
-- 이 때, 왼쪽 테이블의 row를 유지하려면 Left Outer Join,
-- 오른쪽 테이블의 row를 유지하면 Right Outer Join 이다.

-- teaches 테이블 생성
create table teaches (
	id int primary key,
    course varchar(7),
    semester varchar(7),
    year varchar(4)
);

create table instructor (
	id int primary key,
    name varchar(7),
    dept_name varchar(7),
    salary int
);

insert into instructor values (3, 'mark', '수학', 75000);
insert into instructor values (4, 'tom', '심리', 90000);
insert into teaches values (3, '인공지능', '봄', '2022');
insert into teaches values (4, '사회심리', '가을', '2023');
insert into teaches values (5, '네트워크', '봄', '2022');   
insert into teaches values (6, '알고리즘', '가을', '2023');

select * from instructor;
select * from teaches;

-- left outer join
select * from instructor I left outer join teaches T on I.id = T.id;
select * from teaches T left outer join instructor I on I.id = T.id;

-- right outer join
select * from instructor I right outer join teaches T on I.id = T.id;
select * from teaches T right outer join instructor I on I.id = T.id;

-- DCL
-- 사용자 권한 부여 명령어
-- GRANT permission_type ON dbname.table_name TO username@host IDENTIFIED BY 'my_password'
-- [with grant option];

-- 호스트: 로컬 호스트
-- grant all privileges on *.* to 'user'@'localhost' identified by '4321' with grant option;

-- *.* = 모든 DB의 모든 Table

-- 권한 확인
show grants;

-- 1. 계정 생성
create user 'user'@'localhost' identified by '4321';
select * from mysql.user; -- 존재하는 계정 확인.
flush privileges;

-- 'user'에게 접근 권한을 준 것.
grant all privileges on *.* to 'user'@'localhost';
grant all privileges on *.* to 'root'@'%';

-- "%" (외부) 권한을 가진 계정 먼저 생성
create user 'user2'@'%' identified by '4321';

-- 권한 삭제
revoke privileges on *.* from 'user'@'localhost';

-- 계정 삭제
drop user 'user'@'localhost';

-- 계정 수정
alter user 'user'@'localhost' identified by '1234';	 -- 비밀번호 변경

-- 저장
flush privileges;

-- user 계정 생성
create user 'user'@'localhost' identified by '1234';
-- user 계정에 DB 권한 부여 (모든 DB에 접근 가능하도록)
GRANT ALL privileges on *.* to 'user'@'localhost' with grant option;

-- 현재 사용중인 MySQL 캐시 지우고 새로운 설정 적용
flush privileges;