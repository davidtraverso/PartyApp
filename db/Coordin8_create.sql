-- Created by Vertabelo (http://vertabelo.com)
-- Last modification date: 2019-06-26 21:38:56.259

-- THIS SCRIPT WILL BE RUN AS A SUPERUSER

-- role for coordin8
create role coordin8 with login password 'coordin8_rocks_2019';

-- schema for coordin8
drop schema coordin8Schema cascade;
create schema coordin8Schema;
alter user coordin8 set search_path = coordin8Schema, public;

REVOKE CONNECT ON DATABASE accsoftwarebootcamp FROM coordin8;
GRANT CONNECT ON DATABASE accsoftwarebootcamp TO coordin8;

-- GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA coordin8Schema TO coordin8;
-- above grant only provides privs on existing tables.  See default privs below
ALTER DEFAULT PRIVILEGES 
    FOR ROLE coordin8 
    IN SCHEMA coordin8Schema
    GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO coordin8;
-- ALTER DEFAULT PRIVILEGES 
--     FOR ROLE coordin8 
--     GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA coordin8Schema TO coordin8;

ALTER DEFAULT PRIVILEGES
    FOR ROLE coordin8
    IN SCHEMA coordin8Schema
GRANT 
    ALL PRIVILEGES
    ON SEQUENCES
    TO 
    coordin8;

ALTER ROLE coordin8 SET search_path TO coordin8Schema;

-- EXEC SQL 
-- CONNECT TO accsoftwarebootcamp AS main USER coordin8/coordin8_rocks_2019;

-- \c "host=pgdb.accsoftwarebootcamp.com port=5432 dbname=accsoftwarebootcamp connect_timeout=10 sslmode=disable"

-- Table: Events
CREATE TABLE coordin8Schema.Events (
    id serial  NOT NULL,
    event_name varchar(100)  NOT NULL,
    event_date date  NOT NULL,
    event_start time  NOT NULL,
    event_end time  NOT NULL,
    isSecret boolean  NOT NULL,
    Parties_id integer  NOT NULL,
    event_location_id integer  NOT NULL,
    CONSTRAINT Events_pk PRIMARY KEY (id)
);
GRANT ALL PRIVILEGES ON coordin8Schema.users to coordin8;

-- Table: Expenses
CREATE TABLE coordin8Schema.Expenses (
    id serial  NOT NULL,
    amount decimal(10,2)  NOT NULL,
    status varchar(30)  NOT NULL,
    creation_date date  NOT NULL,
    Events_id integer  NULL,
    CONSTRAINT Expenses_pk PRIMARY KEY (id)
);

-- Table: Locations
CREATE TABLE coordin8Schema.Locations (
    id serial  NOT NULL,
    street varchar(100)  NOT NULL,
    city varchar(25)  NOT NULL,
    state varchar(25)  NOT NULL,
    country varchar(30)  NOT NULL,
    timezone varchar(12)  NOT NULL,
    CONSTRAINT Locations_pk PRIMARY KEY (id)
);

-- Table: Parties
CREATE TABLE coordin8Schema.Parties (
    id serial  NOT NULL,
    party_type varchar(100)  NOT NULL,
    party_name varchar(100)  NOT NULL,
    start_date date  NULL,
    start_month smallint  NOT NULL,
    start_year smallint  NOT NULL,
    Locations_id integer  NOT NULL,
    CONSTRAINT Parties_pk PRIMARY KEY (id)
);

-- Table: Roles
CREATE TABLE coordin8Schema.Roles (
    id integer  NOT NULL,
    role_name varchar(20)  NOT NULL,
    CONSTRAINT role_id PRIMARY KEY (id)
);

-- Table: Transaction_History
CREATE TABLE coordin8Schema.Transaction_History (
    tran_id serial  NOT NULL,
    Expenses_id integer  NOT NULL,
    Tran_Date date  NOT NULL,
    toStatus varchar(30)  NOT NULL,
    toUser_id integer  NOT NULL,
    amount decimal(10,2)  NOT NULL,
    fromStatus varchar(30)  NOT NULL,
    fromUser_id int  NOT NULL,
    CONSTRAINT Transaction_History_pk PRIMARY KEY (tran_id)
);

-- Table: User_Party_Role
CREATE TABLE coordin8Schema.User_Party_Role (
    id serial  NOT NULL,
    Parties_id integer  NOT NULL,
    Users_id integer  NOT NULL,
    Roles_id integer  NOT NULL,
    CONSTRAINT User_Party_Role_UK UNIQUE (Parties_id, Users_id, Roles_id) NOT DEFERRABLE  INITIALLY IMMEDIATE,
    CONSTRAINT User_Party_Role_pk PRIMARY KEY (id)
);

-- Table: Users
CREATE TABLE coordin8Schema.Users (
    id serial  NOT NULL,
    first_name varchar(50)  NOT NULL,
    last_name varchar(50)  NULL,
    phone bigint  NOT NULL,
    email varchar(100)  NOT NULL,
    password varchar(200)  NOT NULL,
    Parties_id integer  NOT NULL,
    Locations_id integer  NOT NULL,
    Roles_id integer  NOT NULL,
    CONSTRAINT Users_pk PRIMARY KEY (id)
);

-- foreign keys
-- Reference: Events_Locations (table: Events)
ALTER TABLE coordin8Schema.Events ADD CONSTRAINT Events_Locations
    FOREIGN KEY (event_location_id)
    REFERENCES coordin8Schema.Locations (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Events_Parties (table: Events)
ALTER TABLE coordin8Schema.Events ADD CONSTRAINT Events_Parties
    FOREIGN KEY (Parties_id)
    REFERENCES coordin8Schema.Parties (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Expenses_Events (table: Expenses)
ALTER TABLE coordin8Schema.Expenses ADD CONSTRAINT Expenses_Events
    FOREIGN KEY (Events_id)
    REFERENCES coordin8Schema.Events (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Parties_Locations (table: Parties)
ALTER TABLE coordin8Schema.Parties ADD CONSTRAINT Parties_Locations
    FOREIGN KEY (Locations_id)
    REFERENCES coordin8Schema.Locations (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Transaction_History_Expenses (table: Transaction_History)
ALTER TABLE coordin8Schema.Transaction_History ADD CONSTRAINT Transaction_History_Expenses
    FOREIGN KEY (Expenses_id)
    REFERENCES coordin8Schema.Expenses (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Transaction_History_Users (table: Transaction_History)
ALTER TABLE coordin8Schema.Transaction_History ADD CONSTRAINT Transaction_History_Users
    FOREIGN KEY (toUser_id)
    REFERENCES coordin8Schema.Users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: User_Party_Role_Parties (table: User_Party_Role)
ALTER TABLE coordin8Schema.User_Party_Role ADD CONSTRAINT User_Party_Role_Parties
    FOREIGN KEY (Parties_id)
    REFERENCES coordin8Schema.Parties (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: User_Party_Role_Roles (table: User_Party_Role)
ALTER TABLE coordin8Schema.User_Party_Role ADD CONSTRAINT User_Party_Role_Roles
    FOREIGN KEY (Roles_id)
    REFERENCES coordin8Schema.Roles (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: User_Party_Role_Users (table: User_Party_Role)
ALTER TABLE coordin8Schema.User_Party_Role ADD CONSTRAINT User_Party_Role_Users
    FOREIGN KEY (Users_id)
    REFERENCES coordin8Schema.Users (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Users_Locations (table: Users)
ALTER TABLE coordin8Schema.Users ADD CONSTRAINT Users_Locations
    FOREIGN KEY (Locations_id)
    REFERENCES coordin8Schema.Locations (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Users_Parties (table: Users)
ALTER TABLE coordin8Schema.Users ADD CONSTRAINT Users_Parties
    FOREIGN KEY (Parties_id)
    REFERENCES coordin8Schema.Parties (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- Reference: Users_Roles (table: Users)
ALTER TABLE coordin8Schema.Users ADD CONSTRAINT Users_Roles
    FOREIGN KEY (Roles_id)
    REFERENCES coordin8Schema.Roles (id)  
    NOT DEFERRABLE 
    INITIALLY IMMEDIATE
;

-- End of file.

