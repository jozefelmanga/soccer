package com.example.webdevteam.springaout.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.webdevteam.springaout.models.PlayerModel;

public interface PlayerRepository extends JpaRepository<PlayerModel, Long> {

}
