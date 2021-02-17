package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
public class MainController {
    @RequestMapping("/")
    @ResponseBody
    public String index(){
        return "Hello, Spring";
    }

}
