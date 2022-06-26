## Pre-requisite

1. `.env.example` copy paste to `.env`

2. Install composer
```
composer install
```

3. Generate APP Key
```
php artisan key:generate
```

4. Generate JWT Secret
```
php artisan jwt:secret
```

5. Migrate Database
```
php artisan migrate
```

6. Run Seeder Database
```
php artisan db:seed
```

## Run Project
run on command `php artisan serve`