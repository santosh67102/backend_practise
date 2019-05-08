package com.hellokoding.springboot.view;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller

public class HelloController {
    @GetMapping({"/", "/hello"})
    public String hello(Model model, @RequestParam(value="name", required=false, defaultValue="San70sh") String name) {
        model.addAttribute("name", name);
        return "hello";
    }
    @PostMapping({"/postForm"})
    public String postFileName(Model model, @RequestParam(value="file_name", required=false, defaultValue="Word") String file_name) {
       	model.addAttribute("filename", file_name);
        return "postfile";
    }
   
}

