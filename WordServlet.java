package com.google.sps.servlets;

import javax.servlet;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;


@WebServlet("/word")
public class WordServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get word entered by the user
    String userInput = request.getParameter("user-input");
    // Get session id 
    long sessionId = request.getSession().getId();

    System.out.println("You submitted: " + userInput);

    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();

    KeyFactory keyFactory = datastore.newKeyFactory().setKind("Task");

    FullEntity taskEntity =
        Entity.newBuilder(keyFactory.newKey())
            .set("word", userInput)
            .set("sessionId", sessionId)
            .build();
    datastore.put(taskEntity);
  }
}