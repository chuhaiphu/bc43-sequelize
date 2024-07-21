#!/bin/bash
source .env
sequelize-auto -h $DB_HOST -d $DB_DATABASE -u $DB_USERNAME -x $DB_PASSWORD -p $DB_PORT --dialect $DB_DIALECT -o ./src/models -l esm
