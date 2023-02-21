<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PageController extends AbstractController
{
    #[Route('/', name: 'index')]
    public function index(): Response
    {
        return $this->render('page/index.html.twig', [
            'controller_name' => 'PageController',
        ]);
    }

    #[Route('/gamebomb', name: 'bombs')]
    public function bombs(): Response
    {
        return $this->render('page/gamebombs.html.twig', [
            'controller_name' => 'PageController',
        ]);
    }
}
