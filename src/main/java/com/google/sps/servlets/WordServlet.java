package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


@WebServlet("/word")
public class WordServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get word entered by the user
    String userInput = request.getParameter("user-input");

    System.out.println("You submitted: " + userInput);
    response.getWriter().println("<h1>You submitted: " + userInput +"</h1>");
  }
}