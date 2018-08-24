# symfony 4.1

创建symfony项目
```
composer create-project symfony/skeleton my-project
```

为了方便开发，建议使用自带的WebServer进行测试，这样路由规则才会正确生效。
```
composer require symfony/web-server-bundle --dev
```
## 查看symfony版本信息
```
php bin/console

Symfony 4.1.1 (kernel: src, env: dev, debug: true)
```


## 查看当前路由表

```
php bin/console debug:router
```

## Service依赖注入

在./src/Service中创建MyService类。

在service.yaml添加自动加载路径。

在控制器方法或构造方法中以参数形式注入该类。

列出你能用来自动加载注入的类和接口
```
php bin/console debug:autowiring
```
显示应用里包含的服务
```
php bin/console debug:container
```

## 日志

```
composer require symfony/monolog-bundle
```
默认情况下，配置已自动生成，不需要任何后续配置，即可直接使用。

为了方便管理日志，避免单个日志太大，可以将monolog.yaml中type设为rotating_file，日志会按日期自动划分。

>http://symfony.com/doc/current/logging.html#how-to-rotate-your-log-files

## 单元测试

### 安装和启动PHPUnit

本机安装phpunit二进制文件。
```
$ wget http://phar.phpunit.cn/phpunit-6.2.phar
$ chmod +x phpunit-6.2.phar
$ sudo mv phpunit-6.2.phar /
usr/local/bin/phpunit
$ phpunit --version
PHPUnit x.y.z by Sebastian Bergmann and contributors.
```
执行以下语句将自动安装phpunit及其相关套件
```
php bin/phpunit
```
编写测试用例后，运行测试
```
phpunit
```
输出调试信息，例如当一个测试开始执行时输出其名称。
```
phpunit --debug
```
生成代码覆盖率报告
```
phpunit --coverage-html CoverageReportDir
```

### 在测试用例中使用容器中的服务

`self::bootKernel();`可以启动Symfony内核。

`self::$container->get()`可以从当前容器取出服务。

具体可取出的服务见一下命令输出的列表。
```
php bin/console debug:autowiring
```
示例代码
```php
<?php
namespace App\Tests\Service;

use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class SomeTest extends KernelTestCase
{
    public function setUp()
    {
        self::bootKernel();
    }

    public function testMyFunc()
    {
        $service = self::$container->get('App\Service\MyService');
        $this->assertTrue($service->func());
    }
}
```

## 使用MongoDB

### 安装MongoDB

http://www.runoob.com/mongodb/mongodb-osx-install.html

### 运行 MongoDB

启动服务
```
mongod
```
启动客户端连接 MongoDB
```
mongo
```
查看所有数据库
```
show dbs
```

### PHP7 安装Symfony扩展

http://www.runoob.com/mongodb/php7-mongdb-tutorial.html

在 webdevops/php-nginx:7.2 镜像中
```
pecl install mongodb
echo 'extension=mongodb.so' >> /opt/docker/etc/php/php.ini
```

## Symfony安装MongoDB Bundle

>https://www.doctrine-project.org/projects/doctrine-mongodb-odm/en/latest/reference/introduction.html#using-php-7

先安装
```
composer config "platform.ext-mongo" "1.6.16" && composer require "alcaeus/mongo-php-adapter"
```
再安装
```
composer require doctrine/mongodb-odm
```

>http://symfony.com/doc/master/bundles/DoctrineMongoDBBundle/index.html

再安装
```
composer require doctrine/mongodb-odm-bundle
```
在config/bundles.php添加
```
Doctrine\Bundle\MongoDBBundle\DoctrineMongoDBBundle::class => ['all' => true],
```
在config/doctrine.yaml中添加
```
parameters:
    mongodb_server: "mongodb://localhost:27017"
```
```
doctrine_mongodb:
    connections:
        default:
            server: "%mongodb_server%"
            options: {}
    default_database: test_database
    document_managers:
        default:
            auto_mapping: true
            mappings:
                App:
                    is_bundle: false
                    type: annotation
                    dir: '%kernel.project_dir%/src/Entity'
                    prefix: 'App\Entity'
                    alias: App
```


## 使用前端组件化

>学习前提：掌握 Vue 和 基于Vue的UI框架。

### 安装



