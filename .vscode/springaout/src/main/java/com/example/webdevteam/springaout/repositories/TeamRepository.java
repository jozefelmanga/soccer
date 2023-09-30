package com.example.webdevteam.springaout.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.webdevteam.springaout.models.TeamModel;

public interface TeamRepository extends JpaRepository<TeamModel, Long>{

}
