<?php
/**
 * Created by PhpStorm.
 * User: hyperqing
 * Date: 2018/7/17
 * Time: 14:07
 */

namespace App\Controller;

use App\Service\MyService;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;

/**
 * 首页模块
 * @package App\Controller
 */
class IndexController extends Controller
{
    /**
     * 首页
     * @param MyService $myService
     * @param LoggerInterface $logger
     * @return Response
     */
    public function index(MyService $myService, LoggerInterface $logger)
    {
        $logger->info('这是一条信息的日志', ['id' => 123456789]);
        $logger->debug('这是一条调试的日志', ['id' => 123456789]);
        $logger->error('这是一条错误的日志', ['id' => 123456789]);
        return new Response($myService->calc());
    }
}
