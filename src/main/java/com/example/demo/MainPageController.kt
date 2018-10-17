package com.example.demo

import kotlinx.html.*
import kotlinx.html.dom.createHTMLDocument
import kotlinx.html.dom.serialize
import org.springframework.beans.factory.annotation.Value
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class MainPageController {

    @Value("\${spring.profiles.active}")
    val profile: String = ""

    @GetMapping("/")
    fun renderMainPage(): String {
        return renderInitialMarkup(profile)
    }
}

fun renderInitialMarkup(profile: String): String =
        createHTMLDocument().html {

            head {
                title { +"spring-boot-react-starter" }
                meta(charset = "utf-8")
                meta(name = "mode", content = profile)
                link(rel = "stylesheet", type = "text/css", href = "/dist/bundle.css") {}
                style {
                    +"""
                        body {
                            background-color: #1a1a1a;
                            margin: 0;
                            padding: 0;
                        }
                    """.trimIndent()
                }
            }

            body {
                div {
                    id = "root"
                }
                if (profile == "mocked") h1 { +"$profile mode" }
                script(src = "/dist/bundle.js") { }
            }
        }.serialize(true)
