<?php
/**
 * Created by PhpStorm.
 * User: hyperqing
 * Date: 2018/7/17
 * Time: 14:09
 */

namespace App\Service;

/**
 * 添加自己的Service
 * @package App\Service
 */
class MyService
{
    /**
     * @var OtherService
     */
    private $otherService;

    public function __construct(OtherService $otherService)
    {
        $this->otherService = $otherService;
    }

    public function calc()
    {
        return 1 + 1 + $this->otherService->one();
    }
}
