# symfony 4.1

创建symfony项目
```
composer create-project symfony/skeleton my-project
```

为了方便开发，能够使用自带的路由进行测试
```
composer require symfony/web-server-bundle --dev
```

## 查看当前路由表

```
php bin/console debug:router
```

查看
```
php bin/console

Symfony 4.1.1 (kernel: src, env: dev, debug: true)
```

## Service依赖注入

在./src/Service中创建MyService类。

在service.yaml添加自动加载路径。

在控制器方法或构造方法中以参数形式注入该类。
by type-hinting an argument with the service's class or interface name

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

