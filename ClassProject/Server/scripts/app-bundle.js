define('text!modules/home.html',[],function(){return "<template>\r\n\t<h1>${message}</h1>\r\n\t<style>\r\n\t\tbody {\r\n\t\t\t\tbackground-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAA1BMVEXLysZ5khw6AAAAJUlEQVR4nO3BAQEAAACAkP6v7ggKAAAAAAAAAAAAAAAAAAAAAAZChgABiyUD6gAAAABJRU5ErkJggg==');\r\n\t\t}\r\n</style>\r\n\t<p>\r\n\t<img src=\"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExIVFhUXFRgYFRgYGBcXGhgXFxUYFxcWFxoYHSggGBolGxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJgBTAMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUHBgj/xABFEAABAwEFBQQIBAMGBQUAAAABAAIRAwQSITFBBQZRYXETIoGRBxQyobHB0fAjQlLhQ2LxFiRjcoKSFVNzssIXJZOis//EABoBAQADAQEBAAAAAAAAAAAAAAABAgMEBQb/xAAlEQEBAAICAgICAQUAAAAAAAAAAQIRAyESMQRBIlFxBRNhkfD/2gAMAwEAAhEDEQA/ANxQQVPtvZ5dL2PLKudOp+hwyBGRYdWnDPVBcILnN2N6W2guoVQKVqpyKlI6xm6nObdeI966NAEEEEAQQQQBBBBAEEEEAQQQQBBBJqVA0S4gDiTAQKQVHtPe6xUB37QyeDTfPk2YXMWr0u2NpIbTrOjWGtB6S6VG4t4ZfpoaCzx/pgsAA7te8c2hmXiTB8FXv9M1MkhlkeRoS9rfPAx5puHhWpoLLrP6YmT37HUDdSx7XmOMQJXR7H9JOzrQbvb9k6QLtYGlicsXd33puFxsdcgk06gcJaQQciDI8wlKVQQRAo0AQTRrtGqT603n5IH0CUwbSNM1im++99pqWitQ7UCnTqOYAyQDdMGeOM5rfg4Ly3UrLl5ZxzbcS4ASTgq+rt6ytmbRSwz77T8CvPNbaNR7iH1HluHdvOIw4CYRvtpgNaAB95rsx/p8+8nNl8u/Ubfbt+rHTye6of5G/N0Bc5tD0pXfYoNH+Z0+4D5rL/WHE4lMVXSVvh8LinubZZfJ5L96dta/SbbX+yabB/KyT5uJVRX3utj/AGrTV8HEfBUDU24rfHg48fUjK8mV91bO23XOJrVD1e4+GJT9n3grN9mo8dHOHwKokq8r+EV8naWPfq1N/jPPUh3x6K+sPpIq4X2h3hHwWZUqw5ean2SqxxiYKzy4OPL3jFpy5z1a17Z3pBoPgOaQdYIKvaW8FncJvx1BWIeqBwwIkcDjmrexuqBsX4jjB+IK58/g8d9dNsfl5z322xJeyRBSkF470mb+knd15HrdCW1qUXruBLBk8RqPhPBRN0fSee7Sto5Cs3X/ADAZ9Rjy1Wm2ilI5/EahYdv3u36rXJaPwKpJZwacyzwOI5INzoV2vaHscHNIkEGQRyITi8/bvby2mxOmk8lmrHYtPh8xj1Wvbp74UbaIb3KoEuYccMiWn8w944IOjQQQQBBBBAEEFG2lbm0abqj8hEAZucTDWtGpJIA6oJDnACTgNVzu1N9bJRwLy92MBgnLMycAPFZdvzvrWrVXUWYNbIcLxLb2RaGt9qDqZkjQQFxzq7vzvwPgT+yzyz/TbDjl9tT2t6Sqrp7BrabBhfd3neAynlj1C4S2bTrWh5c+o94mZcSR5YAdAoVK0sdAgnRrR9/cqfUYS3AgwMQDgBwLsAs7bfboxxk9K62NjLPX6ZKnrtJMAifvVW9Wnq6OgyHkoNSpBgXZ1yAHhiVMRkrqgAyknU6Dkl2KmCSXZASZ+807ahOMz8P2CjU2EAnjlorM/tONcuwYwkDrHmEgux9iT1+aj0xAkiRzMDLhqkF5jWM8IHjGiJ2sbLbX0x+HUdTPBr3N/wC2E7U3itLhDq9ZwPGo8g+ZVVTBccj8D5ZKVSog5+KgiTZ7fVyDnCebhPktR3A3itoZ2T3dqzR1SS5mGV7UcAVmNhsZce4cRpynMLVdzGFrcWxmcNDwKpllZ6a48cs3XbbIquew34vBxmBGBxHzU+4oOy8HRxEfMKyhb8d3i5OXHWXRAbBleeN4aBbarQDpaK3/AOjoXoohYhv7s7s7dX4Pd2gzye0OOJ/mvL0fgX87P8OD5c/GVy1wlEU8ERbgvWcBDcEhwQJ/ZHmrRWg0JNZB1SEzKUC+iHmjARgKNA5SmuSEqVOkbTqVdwM/DDD6q5su1XRqP6Bc4wqSypySxL0ygggvmHuAqXebYrLTRdSfgHey79Dx7Lh4/PirpE5siCg85Wyxvo1H0qgh7DB+RHI5p3ZdqdQrMrMcWua4Ekaie8I1kSFpPpI3bNWn29MTVpDvf4lP6iJ81lzDOKD0VYbW2rTbUYQWuAII1BCfWVejXePsn+rVD3Hn8M/pfq3o7Mc54rVQgCCCCALjPSPtE0mMP6W1Xt/6gp3GOPJt9zurQuzWdeley9vQa6nLixxkCcW3XXhzOEga3eaipx9sXbbWs8QMTmZAn6KtqWgudJ++aRVspNQtGInA8REz1iME6yzwcWnPAdOJCz1G8tqzsUQIaSPj1OuKvKZ7oDiBAwaNOv2FRWeqcMY0AGf0CubNdae628QM3eyJzJnw59As63x9Itd+MRM8yM/v7yUdllxJHQQBHh9Uu0UnF99xzOHjgMNFIrGRB9kGABhJjE/upVUtqYb0D+qZqVHZR1H15KyrUgcScQcepIwHLFVz7O+o8U6YLnPddAGpnDDyVopYXZmmoQGi8fHP6K+p7r1XaOJ1A09y7Lc/df1Zrm416uVSLraTHatDoLnkZEjDBdfQsLx7TabRwAcfeSFllyd9OjHikn5Mip7q12/wzp1646KLabE5j7r2kHUa4rbH3YwIMZjP+ijOsdFz7xY29AGInATEE6YlR5puEcFuzu6/tGVHNIa2cdSDl1GcdVodmpAZffknhQGidYxQbSqDoIhXAM48cVSU8FZWGrLSOB9x+yt+LLvTl58etpK4T0o7NDmUq4za7s3c2uBLfI/Fd0Sua9ITZsFU8HU3eVRv1XbwXXJP5cXLN4ViVQQUGhPWpvePmmF707jyb1Ud7M+SaFbzyKk1DCiwrKiBTjQiaEsNTQIpMJZCJSgkhABKRIFNKk03qK1ONhEvUKCCC+Xe4CCCCBqvTkcxl9Fi+/OwPVa3aMH4FZxLf5H5uZyB0W2qp3g2SyvSfSqCWPEHi135Xjx+8SgwgH7+i2TcPeP1qjdefxqYAf8AzcHjrB8Z5LKdqbFq2bCpB7zmEicHNxAMj8zCHA5ETwKLY2032as2szNpxH6m6tP3gQCg9AIKHsnaLK9JtWmZa4T+x4HTwUxAxbXAU3TgLpkzECMTPILzTt/a9sawsdWqtpk4MxbMHPichjMZhekNpV2tab/s3SXcxld5zOS8zekCvTfXd2TAxsAQJ9qcS6cjlhhlkFFWxUQt2IjH5kp3tiXZ8B4YTHiq1zQMfgpdkBbDnanr0VLGstWNlm/dMBoJbhy9r71VnTtBv97IEENyA4T9FE2Y5rjUJzwM+Mx5JDKwvExMH4/XFUrWLi0OcS0n2RiOukxkI+PiohrlxgeJ+PnCJ9YvZBMA6ch+6j03Thp94fFRE2pL2zB/L1z+8Vc7j0v7zfwltCq9nG+0AA8ovEjoFSnU8PvD71KPZ1uqUqrH0yA9skaiIxaR+kiQlm4nG6vbaqNsZQpMY0SSBgMyYxKgbVrVKtRlAPulwvOiZDZj3wfJUOwd7KDnCo+k+m8CC32mCf0nhhrC6KxVW1qpqMBDXDvvxvEAQGs/S3p81z3f26pr3P8AZjYmzxee6Ya1xbA1AwJVptAANusI7rS4HmFC2RsinZGltI16jnH+Ib8eJwCszZAQQREggjqmi5bu6kWV95gdxEp4lN0xAA4JFR6tvplrdLvJ+x17rxwPd88vfCg3k1VqYFRMtXabh5TTpyVT74Nmw2kf4Tj5QfkplktXaMa7U4Hk4YH75pG0mX6NRn6qb2+bSPmvRwym5XlZ43uMDeZA5YeSaejacxwP38Ehpkr6GdPIvZisdEkIgZJPPDpkEqFpGdHdRygiIVkDKJGEkqARQhGUSAwlDxSAUto5ol6jQQQXy73AQQQQBE4TgUaCDkt7djCoxxIJhsVIEudTElr28alMkkcQXj8yyB7YJF5roJF5plroMS06gr0RWpyOYyWN7/7v+rVe3ptijVcbwGVOpqOQP3kgd3C3iNnq9k534byInJrzh4B2A5EA8VsNN4cARkV5zWqejneXtWer1T+I32SfzD6/eqC23wqljZES5jqdMuPdbVfg1zuAAvd7SOa8w23PvSM8Tj194OK9K+kRzm06TmiYe4EH2e/Sczvcu8fhqvNG0XNDwRN0QBOZEYkg6yq1fFEDoMcctZ4eCfNQuPTEqNSbLjGYggccU5VdBfjmf6BFpUrZ1ctmeZj5J+xPLpJ/M6T+3n7lFsVOc9R8dVNdTAgjIff0VK0x3pMqAHKZGfDkPBIktkDPXh+6RfukEnmjrWi8CB1VV06hVAbdHiT9/cFNCrDpjTVRgTkB7uCdAEAnGD5/tzQS6FRxaRMXoMScY1KvN1N7K9mJY4tqUuBwLf8AIYnwOHRc+ASBjiTPhyU2lQEwMfvVVsi+NrSbNv5Qc2S1wwxABOPD91c7G2y20tLmAgAxiCFllgsbictcfotP3feOxECMTh4rO6jWTra1lN1CiL0zVeq2pkIdgmKzkK1VRKlbRUq8O7P2oKLyHGGPzn8rsgehGB8FbW3aYpjErht4qr2UXuY28Q0kN4ngs5qekK1wGOdTcG4QaZmOBN6V2cF3jpw/Kxky3PtY2jB9QfzGPMqG18XuhSaVrNVoqEQXgzGEGTl5ImOnriD1+wvqML5Yy/uPns5q6CmcAnQVFs9TQp+VrKyp1AhJKClAkRSiUlSCd1RAoFAKARSmJJRjwUJj1OgggvmHuAggggCCCCAKu23s1lek+nUbLXiHcuDhzCsUEHnfaWz32as+z1Pab7J/WzRw4orJanU3tqMMOaQR4LUvSJuz6xSv0x+NSBNM/qbmWHj+/NZFSqSJy4jgdQg3XZFvpbQsuOMiHjUOCw/0q7j1bO+paGAGl3XQ0OJF4QXOEQGyDJ0LhlIV5ufvC6yVg7+G4gVBy/Uuv9Ku27O7ZdZzajS57C1gBHe77A9h/wBJmM8OShMecGAgXvLxCWw4Sdfok0jOB6j4/VSKlnlktEhpkxoCMPvkoaQ5SqGceGXwUyhUBBJPuy1yVayrlImBhjBA4TwxUuwVPv6Kti+NTLS4EDE5Za9eST6vjiTdjxmcki1guMAAAQIGpOQJOfVSyAGZgczhPJozPvVV/dN9vBPT4p6iQRjGnlr99VXVXY4fcYqTZqZOJy+Z0QldFsTZj65Lg3AEAZ+C7Cx7quAl2Hx6Ky3WsopUGcSAT1ICtrVaIhc2WdrrxwkiJYdjU2DFoVnTECAoDaxJzTwqmMFTa+kh70xUcm3VJTVWqmzRmq1xOCFKzxninQ8AXicBmdFFpW6+YaMOPFSg3tBgukYLh9k+jZ1qqVaprkMa/vG6C9znYta2cBAzJ5QF2213AMJTHot3mbVdWsroa8PcQ05yDB6y0DyXVwS624/lZTqfbjd4d2m2K5TY57muBcC8gmZxyAwxConGDPmtY9KVgmz06urKt3qKjT82NWVPbmF9F8TLy4o8D5GOuSotqaQcOqkU6kgO8+uqZiWxqPhxTNnfBjQ/FdEuqxs3FiEbimWPhLqHELRQoIFGURClBJKSUYSSiBlKakI2hRUx6pQSb44hDtBxHmvmHulIJPaDiPNDtBxHmgUgk9oOI80k1mjNw8wgcQTXrDP1t8wkm2UxnUZ/uH1QOVGSPgsa9JG7/q9X1mm2KVQxVAyY/j0P14LYPXqX/NZ/ub9VXbap2evTdSe9ha8XSLzSccGkY5gwgwSU9U2fQtdN9GoSytdLqFS8WsNRrYays3EERIDokZKNt6zPsNZ1CqPZ9lxMXm6YlVdoc9/epODTgRI7zTAy0800mOWq0XU3w4EFphwIIIIOLTzVpZLSGOJGLXDEHnn8PeoNoF/CZeCTjm6TJ8ZlIs7rvdeCAfCOfRVs2vjdLC1WNoxZ7ByPCRMHpHl0TVAEEY6+R+msqXY25skYieR5g6FRxRxLTII8cPDTXziFVpr7TrU+BIz15nAT0gSq+kC43nGefHgOiKvVIMGCCM+PQpVkeANOXFNahvdWFhspe6F2OzN3cA53VVO70Z4eK6unawBmsM8q6+PCSbX9Co1jQAdMAEVttoY5s/mafCPsqvstYZmSqXerafep6DEE/eiymO61yuptYVNqFoD3OAvzd6jIfHyUiybYc/Id39S5GkHWohkkNBw+/Nd5sTYoDRfE8tFOUkJbTlbaTGNlzgPFV1DarXm97Q0jI9V1FPZdnEns2zoYyXJWa0WcV6ofU7OmKjg4taXOvNAgNAGBOclMcd9RFzkm6Ladsq1HsYRDCDdaM3OBEYa55LsDuY9hDqVQOBAkPwIMCYgYifsqFsfeTZtne5za1Z5IDQXMwaJnCAMzryV8N+7HmHPP+krpx4prtxcnyLv8VdatyXVKNS9U/FLT2Yb7IcMRJIxyjJYbbrNUoW5lSneZUzwzbUZg4R7o1XoE7+WT/E/2/uuD3ztFmq16dqs09q17Xua5ndL2EEOzxmII16ru4Lj4XivW+5/Lh5rlc5ye/wB/w0DauzH2iwuo1bva1KImMhVgGROQvBefTMwQQQYIOYIzaecytisfpDsldobXJs9TW9iydYeMAP8ANC4X0ibIFOu60UodQrG8C2C0PcAZBGEOzB4zyXT8a5cWVwymmHNMc55YuOqiDITNRgcJHjyUpzZUZzSMRn95r0N7jivVHRqTgfaHvH1TxqXm8xn0UV4DssHfeSJtUzwd7j9OieWjxWDHyEbXKE2pBkZajUJ51UYOGWvVXmatxOjBE04oqjsjxCQwq+1NFuRtJRVBqnKYwQbZ2SHYq17BKFnXzD3VR2CHq5V0KAShQCCj9XPBD1U8FfCiEoUhwQc96meCP1B3BdEKaMMQc5/wx3BH/wAIcujuI7iDjd/t2PXbJJANak3DW+0Ywef78VhVO2vpuc13Oeq9UtELHvSLuKDa2upljGVZcb7rjYbLqjb2huhxCkZTtSzXXDCHXQ53IuF+PBrm+9N0q9Qtg94c8fKVrmyNxLNaaRq1qri57nOBpupPGJkCS/QECIERrmqE7g2hhc1raZbeN1zq1BpInAkGoYw0lNJl04GjaiNCPD78kuvUfOIjhPScNQu3buDWDZNSzh04NNehEcb3aYdIPVIrbk1SBNosYIjO1UogYaE4xr7lGonyrharnHEsOUzBxHHmipF2YC7wbmO7t62WPuzA9ZbgDOGCSzc26T/frC0Y/wAacOB7sHH3JqI8q5/Zu0qjMLmMxJOHQQruy7ZIILqbjjoRPSDl71LO67ZE2+xARBHaPM85uzPDhCU3d+kAQdpWQyBjeqSIOl1g98qlwjXHls+0v+0VIgRSqRpD2mfNq5vevapqFjWU3tbGN5wdOOkCIV4NjUBido2adYbWIJ0JAZnx4pFTY1mdntGhGODaNoOPKGYKs49VfLmtmtq3ZO0C0tDZpOwiRn5+0u/sG2q4aPZdzg/C8uOOxrLEO2he4f3e1Ojp3PcrLZ1WyUwf/cC4CPao1xnOGLJJwPMQmfH5J4uaY9V0lo2xaC04N/2n6rj9pCpUdJdEHICBPE8Tkr47YsoaT61I1ihWMYgTF0akeagtt1idJFqOZkdi4EccCQVPDw5W/jNnPz4XHvJS9m8cD5JdN1QHDD3fBT6u0rCDBr1Z/wCjH/c8Jt+0rCBPaWgiYkUmZxOtRaOYGWl5wjFOse4kDUmAOfBNN2rYzg31k9KdLhP/ADOShu3isjSO7aidO7S+VTBXkx12pd7Trfs5xkOYQ4coPDGepTFPbtWhTNCrS7agQRcdeBaC69DXAGMTIGMclZVfSRfAZ2VV8YD8Ok53h+ISrKx1XPZeqUg0lxhrg28G6Xg0kA568NVthy5a8bdz/vtTLjx3udVnxrsLiGXgMwHwHRwMYHqPclOZK7m1bLviRSb1hc7bdiVAe6G9B9wurD5Gr258+DcUFWnKYe0jmOf1VjaaT2Hv03jnBPvEhRr7Tk4eYBXZM8c/tzXHLFCngS33hG2oRpIOca/upL2KM+6FFx0TLaXRqtLALwBE54I6b4MFVVpM/lKXSrm6GuGWR4DgeKrOXV0tePc2u24iE2asIrM6GXpmQoZE4rbz6ZePb0/dRwjRgr517Ig1KDUJR3kBo4SbyF9AqEcJF9DtUC4Rwm+1RdqgehQtp7Op1WjtKYqBskNdl3mlp9ziPFPteUKzspQY1vBuhXs73dnRDqJMtgglo4ELmawe0waD8ODHH4Bb5UMnlokFinYwMPfI/u9UiRI7J+P/ANVK2k51Speo2Ou1sCB2T84xdgIE/JbeaIROs45qE760wG1bItlQtLbNWF2T7JEyI1ITQ3QtxEdhVi5c/JkDP6/ct+dZUg2YqUMK/sbbiZ7F/t3vap5jD9XDVBu4ltiOyPslvtMyJk/mW6GzHgi9XPBQMR/sHbZns9Wu9tubRA9ykWfcq3MENptzJxqDXPRbL6ueCP1cqRj43R2j+mkP9Y+TEY3M2hJP4UnMmq4z17mK17sOSHYck2MmduZb3CHPpRmRfdHuYjp7jW0CBVpDo6p9FrHq/JDsE2Mn/sDapk1qU8fxCfNKd6P7Sc69Lxa8/NaqaHRDsOibGV/+n1oyNpZ/8bz/AOacoejpw9uu08LtOP8AyK1D1foiFmlBR7J3MszWi68l0Y4XT4q1fsttPBvAKYNnuzCTaQ7I5/JW8rUaimtTCcNFENk5K5NJF2SvLpXSjdY+Sh2nYlN/tUmO6tC6fsURoqfJGnFVN0qGjC3k1xA8slGfuhS41B4j6LvDRCSbOOCvObKeqrePG+4z2pudT0e/zb9FEq7mDR7vd9FpTrIOCT6mFN58v2f2sf0y527dWmCBLm8PmIUNtADAwDzwWuixBKNiacwD4ArXj+VcJr2zz4JlduyKJBBee6gQQQQBBBBAIRQgggOEAEEEDrGpi1Pk4aIIIGWmNEJP2EEEAkoiSgggIkosUEESLFHBQQQC6idTQQQINJDskEEA7FF2KCCAjRRdjyQQQGaKXZ6OKCCIPtUKvTkkoIKYGuwQ7Dkggp2gOw5IvV0EE2B6sh6sggmwfqqMWUIkE2FizjglNs7eCCCD/9k=\"\r\n\tclass=\"rounded mx-auto d-block\" alt=\"head\" height=\"250px\">\r\n\t</p>\r\n</template>\r\n";});
define('app',["exports", "aurelia-auth"], function (_exports, _aureliaAuth) {
  "use strict";

  _exports.__esModule = true;
  _exports.App = void 0;

  var App =
  /*#__PURE__*/
  function () {
    function App() {}

    var _proto = App.prototype;

    _proto.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.addPipelineStep('authorize', _aureliaAuth.AuthorizeStep);
      config.map([{
        route: ['', 'landing'],
        moduleId: './modules/landing',
        name: 'Landing',
        auth: false
      }, {
        route: 'home',
        moduleId: './modules/home',
        name: 'Home',
        auth: true
      }, {
        route: 'users',
        moduleId: './modules/users',
        name: ' Users',
        auth: true
      }, {
        route: 'helpTickets',
        moduleId: './modules/helpTickets',
        name: 'Help Tickets',
        auth: true
      }]);
    };

    return App;
  }();

  _exports.App = App;
});
define('auth-config',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  var authConfig = {
    baseUrl: "http://localhost:5000/api",
    loginUrl: '/users/login',
    tokenName: 'token',
    authHeader: 'Authorization',
    authToken: '',
    logoutRedirect: '#landing'
  };
  var _default = authConfig;
  _exports.default = _default;
});
define('environment',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.default = void 0;
  var _default = {
    debug: true,
    testing: true
  };
  _exports.default = _default;
});
define('main',["exports", "./environment", "regenerator-runtime", "./auth-config"], function (_exports, _environment, _regeneratorRuntime, _authConfig) {
  "use strict";

  _exports.__esModule = true;
  _exports.configure = configure;
  _environment = _interopRequireDefault(_environment);
  _regeneratorRuntime = _interopRequireDefault(_regeneratorRuntime);
  _authConfig = _interopRequireDefault(_authConfig);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  window.regeneratorRuntime = _regeneratorRuntime.default;

  function configure(aurelia) {
    aurelia.use.standardConfiguration().plugin('aurelia-auth', function (baseConfig) {
      baseConfig.configure(_authConfig.default);
    }).feature('resources');
    aurelia.use.developmentLogging(_environment.default.debug ? 'debug' : 'warn');

    if (_environment.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    return aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('text!modules/components/editHelpTicket.html',[],function(){return "<template>\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-8\">\r\n\r\n                <div class=\"list-group-item\">\r\n                    <span click.trigger=\"back()\"><i data-feather=\"arrow-left-circle\"></i></span>\r\n                    <span click.trigger=\"save()\" style=\"margin-left:5px;\"><i data-feather=\"save\"></i></span>\r\n                    <span show.bind=\"helpTicket._id\" click.trigger=\"delete()\"><i data-feather=\"trash-2\"></i></span>\r\n                </div>\r\n                <div class=\"form-group\" style=\"margin-top:20px;\">\r\n                    <label for=\"title\">Title</label>\r\n                    <input type=\"text\" readonly.bind=\"helpTicket._id\" class=\"form-control\" value.bind=\"helpTicket.title\"\r\n                        id=\"title\" placeholder=\"Title\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"status\" >Status</label>\r\n                    <select value.bind=\"helpTicket.status\" class=\"form-control\" id=\"status\">\r\n                    <option value=\"new\">New</option>\r\n                    <option value=\"inProcess\">In Process</option>\r\n                    <option value=\"closed\">Closed</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group\" style=\"margin-top:20px;\">\r\n                    <label for=\"content\">Description</label>\r\n                    <textarea value.bind=\"helpTicketContent.content\" class=\"form-control\" rows=\"10\"></textarea>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-2\">\r\n                        <label class=\"btn btn-primary\">\r\n                            Browse for files&hellip; <input type=\"file\" style=\"display: none;\" change.delegate=\"changeFiles()\"\r\n                                files.bind=\"files\">\r\n                        </label>\r\n                    </div>\r\n                    <div class=\"col-10\">\r\n                        <ul>\r\n                            <li repeat.for=\"file of filesToUpload\" class=\"list-group-item\">${file.name}<span\r\n                                    click.delegate=\"removeFile($index)\" class=\"pull-right\"></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"card\" repeat.for=\"content of helpTickets.helpTicketContentArray\">\r\n                    <div class=\"card-body\">\r\n                        <div class=\"row\" style=\"padding:3px;\">\r\n                            <div class=\"col-3\">\r\n                                <span innerhtml.bind=\"content.dateCreated | formatDate\"></span><br />\r\n                                ${content.personId.firstName} ${content.personId.lastName}\r\n                            </div>\r\n                            <div class=\"col-9\" style=\"border-left-style: solid;border-left-width:1px;\">\r\n                                ${content.content}\r\n                            </div>\r\n                            <div>\r\n                                <a href=\"http://localhost:5000/uploadedFiles/helpTickets/${content.file.fileName}\"\r\n                                    target=\"_blank\">${content.file.originalFileName}</a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>";});
define('text!modules/components/editUser.html',[],function(){return "<template>\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-8\">\r\n\r\n                <div class=\"list-group-item\">\r\n                    <span click.trigger=\"back()\"><i data-feather=\"arrow-left-circle\"></i></span>\r\n                    <span click.trigger=\"save()\" style=\"margin-left:5px;\"><i data-feather=\"save\"></i></span>\r\n                    <span show.bind=\"user._id\" click.trigger=\"delete()\"><i data-feather=\"trash-2\"></i></span>\r\n                </div>\r\n\r\n                <div class=\"form-group\" style=\"margin-top:20px;\">\r\n                    <label for=\"firstName\">First name</label>\r\n                    <input type=\"email\" class=\"form-control\" value.bind=\"user.firstName\" id=\"firstName\" placeholder=\"First name\">\r\n                </div>\r\n                <div class=\"form-group\" style=\"margin-top:20px;\">\r\n                    <label for=\"lastName\">Last name</label>\r\n                    <input type=\"email\" class=\"form-control\" value.bind=\"user.lastName\" id=\"lastName\" placeholder=\"Last name\">\r\n                </div>\r\n                <div class=\"form-group\" style=\"margin-top:20px;\">\r\n                    <label for=\"email\">Email</label>\r\n                    <input type=\"email\" class=\"form-control\" value.bind=\"user.email\" id=\"email\" placeholder=\"Email\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Password</label>\r\n                </div>\r\n                <div>\r\n                    <input type=\"password\" class=\"form-control\" value.bind=\"user.password\" id=\"password\" placeholder=\"Password\">\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"role\" >Role</label>\r\n                    <select value.bind=\"user.role\" class=\"form-control\" id=\"role\">\r\n                    <option value=\"user\">User</option>\r\n                    <option value=\"staff\">Staff</option>\r\n                    <option value=\"admin\">Administrator</option>\r\n                    </select>\r\n                </div>\r\n\r\n                <div class=\"form-check\">\r\n                    <input class=\"form-check-input\" checked.bind=\"user.active\" type=\"checkbox\" value=\"\" id=\"defaultCheck1\">\r\n                    <label class=\"form-check-label\" for=\"defaultCheck1\">\r\n                        <!-- Active -->\r\n                    </label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</template>";});
define('text!modules/components/tableHelpTicket.html',[],function(){return "<template>\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-8\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th colspan=\"4\">\r\n                                <span click.trigger=\"newHelpTicket()\"><i data-feather=\"plus\"></i></span>\r\n                                <span click.trigger=\"getHelpTicket()\" style=\"margin-left:5px;\"><i data-feather=\"refresh-cw\"></i></span>\r\n                            </th>\r\n                        </tr>\r\n                        <tr>\r\n                            <th scope=\"col\">Title</th>\r\n                            <th scope=\"col\">Status</th>\r\n                            <th scope=\"col\">User</th>\r\n                            <th scope=\"col\">Owner</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr click.trigger=\"editHelpTicket(helpTicket)\" repeat.for=\"helpTicket of helpTickets.helpTicketsArray\">\r\n                            <td>${helpTicket.title}</td>\r\n                            <td>${helpTicket.status}</td>\r\n                            <td>${helpTicket.personId.firstName} ${helpTicket.personId.lastName} </td>\r\n                            <td>${helpTicket.ownerId.firstName} ${helpTicket.ownerId.lastName} </td>\r\n                        </tr>\r\n                        <!-- <tr repeat.for=\"helpTicket of helpTickets.helpTicketsArray\">\r\n\r\n                            <td click.trigger=\"editHelpTicket(helpTicket)\"> ${helpTicket.title}</td>\r\n                            <td click.trigger=\"editHelpTicket(helpTicket)\"> ${helpTicket.status}</td>\r\n                            <td click.trigger=\"editHelpTicket(helpTicket)\"> ${helpTicket.personId.firstName} ${helpTicket.personId.lastName}</td>\r\n                            <td click.trigger=\"editHelpTicket(helpTicket)\"> ${helpTicket.ownerId.firstName} ${helpTicket.ownerId.lastName}</td>\r\n                \r\n                        </tr> -->\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>";});
define('text!modules/components/tableUsers.html',[],function(){return "<template>\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-8\">\r\n                \r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <th colspan=\"4\">\r\n                                <span click.trigger=\"newUser()\"><i data-feather=\"plus\"></i></span>\r\n                                <span click.trigger=\"getUsers()\" style=\"margin-left:5px;\"><i data-feather=\"refresh-cw\"></i></span>\r\n                            </th>\r\n                        </tr>\r\n\r\n                        <tr>\r\n                            <th scope=\"col\">First</th>\r\n                            <th scope=\"col\">Last</th>\r\n                            <th scope=\"col\">Role</th>\r\n                            <th scope=\"col\">Active</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr repeat.for=\"user of users.usersArray\">\r\n\r\n                            <td click.trigger=\"editUser(user)\"> ${user.firstName}</td>\r\n                            <td click.trigger=\"editUser(user)\"> ${user.lastName}</td>\r\n                            <td click.trigger=\"editUser(user)\"> ${user.role}</td>\r\n                            <td>\r\n                                <div class=\"form-check\">\r\n                                    <input class=\"form-check-input\" change.delegate=\"changeActive(user)\" checked.bind=\"user.active\"\r\n                                        type=\"checkbox\" value=\"\" id=\"defaultCheck1\"></div>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</template>";});
define('modules/helpTickets',["exports", "aurelia-framework", "aurelia-router", "../resources/data/help-ticket-object"], function (_exports, _aureliaFramework, _aureliaRouter, _helpTicketObject) {
  "use strict";

  _exports.__esModule = true;
  _exports.HelpTickets = void 0;

  var _dec, _class;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var HelpTickets = (_dec = (0, _aureliaFramework.inject)(_helpTicketObject.HelpTicket), _dec(_class =
  /*#__PURE__*/
  function () {
    function HelpTickets(helpTicket) {
      this.helpTickets = helpTicket;
      this.message = "Help Tickets";
      this.showHelpTicketEditForm = false;
      this.userObj = JSON.parse(sessionStorage.getItem('userObj'));
    }

    var _proto = HelpTickets.prototype;

    _proto.activate =
    /*#__PURE__*/
    function () {
      var _activate = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.helpTickets.getHelpTickets(this.userObj);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function activate() {
        return _activate.apply(this, arguments);
      };
    }();

    _proto.attached = function attached() {
      feather.replace();
    };

    _proto.getHelpTicket =
    /*#__PURE__*/
    function () {
      var _getHelpTicket = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.helpTickets.getHelpTickets(this.userObj);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getHelpTicket() {
        return _getHelpTicket.apply(this, arguments);
      };
    }();

    _proto.openHelpTicketEditForm = function openHelpTicketEditForm() {
      this.showHelpTicketEditForm = true;
      setTimeout(function () {
        $("#firstName").focus();
      }, 500);
    };

    _proto.newHelpTicket = function newHelpTicket() {
      this.helpTicket = {
        title: "",
        personId: this.userObj._id,
        ownerId: "a1a1a1a1a1a1a1a1a1a1a1a1",
        status: 'new'
      };
      this.helpTicketContent = {
        personId: this.userObj._id,
        content: ""
      };
      this.openHelpTicketEditForm();
    };

    _proto.editHelpTicket =
    /*#__PURE__*/
    function () {
      var _editHelpTicket = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(helpTicket) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                this.helpTicket = helpTicket;
                this.helpTicketContent = {
                  personId: this.userObj._id,
                  content: ""
                };
                _context3.next = 4;
                return this.helpTickets.getHelpTicketContent(helpTicket._id);

              case 4:
                this.openHelpTicketEditForm();

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function editHelpTicket(_x) {
        return _editHelpTicket.apply(this, arguments);
      };
    }();

    _proto.save =
    /*#__PURE__*/
    function () {
      var _save = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        var helpTicket, serverResponse;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!(this.helpTicket && this.helpTicket.title && this.helpTicketContent && this.helpTicketContent.content)) {
                  _context4.next = 10;
                  break;
                }

                if (this.userObj.role !== 'user') {
                  this.helpTicket.ownerId = this.userObj._id;
                }

                helpTicket = {
                  helpTicket: this.helpTicket,
                  content: this.helpTicketContent
                };
                _context4.next = 5;
                return this.helpTickets.saveHelpTicket(helpTicket);

              case 5:
                serverResponse = _context4.sent;
                if (this.filesToUpload && this.filesToUpload.length > 0) this.helpTickets.uploadFile(this.filesToUpload, serverResponse.contentID);
                _context4.next = 9;
                return this.getHelpTicket();

              case 9:
                this.back();

              case 10:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function save() {
        return _save.apply(this, arguments);
      };
    }();

    _proto.delete =
    /*#__PURE__*/
    function () {
      var _delete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5() {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (!this.helpTicket) {
                  _context5.next = 6;
                  break;
                }

                _context5.next = 3;
                return this.helpTickets.deleteHelpTicket(this.helpTicket);

              case 3:
                _context5.next = 5;
                return this.getHelpTicket();

              case 5:
                this.back();

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function _delete() {
        return _delete2.apply(this, arguments);
      };
    }();

    _proto.back = function back() {
      this.helpTicketContentArray = [];
      this.showHelpTicketEditForm = false;
      this.filesToUpload = new Array();
      this.files = new Array();
    };

    _proto.changeFiles = function changeFiles() {
      var _this = this;

      this.filesToUpload = this.filesToUpload ? this.filesToUpload : new Array();

      for (var i = 0; i < this.files.length; i++) {
        var addFile = true;
        this.filesToUpload.forEach(function (item) {
          if (item.name === _this.files[i].name) addFile = false;
        });
        if (addFile) this.filesToUpload.push(this.files[i]);
      }
    };

    return HelpTickets;
  }()) || _class);
  _exports.HelpTickets = HelpTickets;
});
define('text!modules/helpTickets.html',[],function(){return "<template>\r\n\t<h1>${message}</h1>\r\n\t<!--  <button click.trigger=\"newHelpTicket()\">New Help Ticket</button>\r\n\t\t<button click.trigger=\"logout()\">Logout</button> -->\r\n\t<style>\r\n\t\t#helpTicketPage {\r\n\t\t\tbackground-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3mp8L1GjDCDH5QThXYHmEF2E0feY4KEsa_szkOtAhdkS9hEZbog');\r\n\t\t\tbackground-size: cover\r\n\t\t}\r\n\t</style>\r\n\t<div id=\"helpTicketPage\">\r\n\t    <compose show.bind=\"showHelpTicketEditForm\" view=\"./components/editHelpTicket.html\"> </compose>\r\n\t    <compose show.bind=\"!showHelpTicketEditForm\" view=\"./components/tableHelpTicket.html\"> </compose>\r\n</div>\r\n</template>";});
define('modules/home',["exports", "aurelia-framework", "aurelia-router"], function (_exports, _aureliaFramework, _aureliaRouter) {
  "use strict";

  _exports.__esModule = true;
  _exports.Home = void 0;

  var _dec, _class;

  var Home = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class =
  /*#__PURE__*/
  function () {
    function Home(router) {
      this.router = router;
      this.message = 'Home';
    }

    var _proto = Home.prototype;

    _proto.login = function login() {
      this.router.navigate('users');
    };

    return Home;
  }()) || _class);
  _exports.Home = Home;
});
define('text!app.html',[],function(){return "<template>\r\n  <nav-bar></nav-bar>\r\n  <router-view></router-view>\r\n</template>\r\n";});
define('modules/landing',["exports", "aurelia-framework", "aurelia-router"], function (_exports, _aureliaFramework, _aureliaRouter) {
  "use strict";

  _exports.__esModule = true;
  _exports.Landing = void 0;

  var _dec, _class;

  var Landing = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class =
  /*#__PURE__*/
  function () {
    function Landing(router) {
      this.router = router;
      this.email = "";
      this.password = "";
      this.authenticated = false;
    }

    var _proto = Landing.prototype;

    _proto.login = function login() {
      this.router.navigate('home');
    };

    return Landing;
  }()) || _class);
  _exports.Landing = Landing;
});
define('text!modules/landing.html',[],function(){return "<template>\r\n    <!-- <h1>${message}</h1> -->\r\n    <img src= \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjP2FZDn0kOIQeHtaxShH9lfHipTDvPNOdO-yEETUffVkG_bia\"\r\n    class=\"rounded mx-auto d-block\" alt=\"hammer\" height=\"250px\">\r\n</template>";});
define('modules/users',["exports", "aurelia-framework", "aurelia-router", "../resources/data/user-object"], function (_exports, _aureliaFramework, _aureliaRouter, _userObject) {
  "use strict";

  _exports.__esModule = true;
  _exports.Users = void 0;

  var _dec, _class;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var Users = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router, _userObject.User), _dec(_class =
  /*#__PURE__*/
  function () {
    function Users(router, users) {
      this.router = router;
      this.users = users;
      this.message = 'Users';
      this.showUserEditForm = false;
    }

    var _proto = Users.prototype;

    _proto.activate =
    /*#__PURE__*/
    function () {
      var _activate = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.getUsers();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function activate() {
        return _activate.apply(this, arguments);
      };
    }();

    _proto.attached = function attached() {
      feather.replace();
    };

    _proto.getUsers =
    /*#__PURE__*/
    function () {
      var _getUsers = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.users.getUsers();

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function getUsers() {
        return _getUsers.apply(this, arguments);
      };
    }();

    _proto.newUser = function newUser() {
      this.user = {
        firstName: "",
        lastName: "",
        active: true,
        role: "user",
        email: "",
        password: ""
      };
      this.openEditForm(); // this.showUserEditForm = true;
    };

    _proto.editUser = function editUser(user) {
      this.user = user;
      this.openEditForm();
    };

    _proto.openEditForm = function openEditForm() {
      this.showUserEditForm = true;
      setTimeout(function () {
        $("#firstName").focus();
      }, 500);
    };

    _proto.changeActive = function changeActive(user) {
      this.user = user;
      this.save();
    };

    _proto.save =
    /*#__PURE__*/
    function () {
      var _save = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!(this.user && this.user.firstName && this.user.lastName && this.user.email && this.user.password)) {
                  _context3.next = 3;
                  break;
                }

                _context3.next = 3;
                return this.users.saveUser(this.user);

              case 3:
                _context3.next = 5;
                return this.getUsers();

              case 5:
                this.back();

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function save() {
        return _save.apply(this, arguments);
      };
    }();

    _proto.delete =
    /*#__PURE__*/
    function () {
      var _delete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4() {
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (!this.user) {
                  _context4.next = 6;
                  break;
                }

                _context4.next = 3;
                return this.users.delete(this.user);

              case 3:
                _context4.next = 5;
                return this.getUsers();

              case 5:
                this.back();

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function _delete() {
        return _delete2.apply(this, arguments);
      };
    }();

    _proto.back = function back() {
      this.showUserEditForm = false;
    };

    _proto.logout = function logout() {
      this.router.navigate('home');
    };

    return Users;
  }()) || _class);
  _exports.Users = Users;
});
define('text!modules/users.html',[],function(){return "<template>\r\n\t    <h1>${message}</h1>\r\n\t<!--     <button click.trigger=\"newUser()\">New User</button>\r\n\t\t<button click.trigger=\"logout()\">Logout</button> -->\r\n\t\t<style>\r\n\t\t\tbody {\r\n\t\t\t\t\tbackground-image: url('data:image/jpeg;base64,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');\r\n\t\t\t\t\tbackground-size: cover\r\n\t\t\t\t}\r\n\t</style>\r\n\t\r\n\t    <compose show.bind=\"showUserEditForm\" view=\"./components/editUser.html\"> </compose>\r\n\t    <compose show.bind=\"!showUserEditForm\" view=\"./components/tableUsers.html\"> </compose>\r\n</template>";});
define('resources/data/data-services',["exports", "aurelia-framework", "aurelia-fetch-client"], function (_exports, _aureliaFramework, _aureliaFetchClient) {
  "use strict";

  _exports.__esModule = true;
  _exports.DataServices = void 0;

  var _dec, _class;

  var DataServices = (_dec = (0, _aureliaFramework.inject)(_aureliaFetchClient.HttpClient), _dec(_class =
  /*#__PURE__*/
  function () {
    function DataServices(http) {
      var _this = this;

      this.httpClient = http;
      this.BASE_URL = "http://localhost:5000/api/";
      this.httpClient.configure(function (config) {
        config.withBaseUrl(_this.BASE_URL).withDefaults({
          credentials: 'same-origin',
          headers: {
            'Accept': 'application/json',
            'X-Requested-With': 'Fetch'
          }
        }).withInterceptor({
          request: function request(_request) {
            var authHeader = 'Bearer ' + localStorage.getItem('aurelia_token');

            _request.headers.append('Authorization', authHeader);

            console.log('Requesting ${request.method} ${request.url}');
            return _request;
          },
          response: function response(_response) {
            console.log('Received ${response.status} ${response.url}');
            return _response;
          }
        });
      });
    }

    var _proto = DataServices.prototype;

    _proto.get = function get(url) {
      return this.httpClient.fetch(url).then(function (response) {
        return response.json();
      }).then(function (data) {
        return data;
      }).catch(function (error) {
        return error;
      });
    };

    _proto.post = function post(content, url) {
      return this.httpClient.fetch(url, {
        method: 'post',
        body: (0, _aureliaFetchClient.json)(content)
      }).then(function (response) {
        return response.json();
      }).then(function (object) {
        return object;
      }).catch(function (error) {
        return error;
      });
    };

    _proto.put = function put(content, url) {
      return this.httpClient.fetch(url, {
        method: 'put',
        body: (0, _aureliaFetchClient.json)(content)
      }).then(function (response) {
        return response.json();
      }).then(function (object) {
        return object;
      }).catch(function (error) {
        return error;
      });
    };

    _proto.delete = function _delete(url) {
      return this.httpClient.fetch(url, {
        method: 'delete'
      }).then(function (response) {
        return response.json();
      }).then(function (object) {
        return object;
      }).catch(function (error) {
        return error;
      });
    };

    _proto.uploadFiles = function uploadFiles(files, url) {
      var formData = new FormData();
      files.forEach(function (item, index) {
        formData.append("file" + index, item);
      });
      return this.httpClient.fetch(url, {
        method: 'post',
        body: formData
      }).then(function (response) {
        return response.json();
      }).then(function (object) {
        return object;
      }).catch(function (error) {
        return error;
      });
    };

    return DataServices;
  }()) || _class);
  _exports.DataServices = DataServices;
});
define('resources/data/help-ticket-object',["exports", "aurelia-framework", "./data-services"], function (_exports, _aureliaFramework, _dataServices) {
  "use strict";

  _exports.__esModule = true;
  _exports.HelpTicket = void 0;

  var _dec, _class;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var HelpTicket = (_dec = (0, _aureliaFramework.inject)(_dataServices.DataServices), _dec(_class =
  /*#__PURE__*/
  function () {
    function HelpTicket(data) {
      this.data = data;
      this.HELP_TICKET_SERVICE = 'helpTickets';
      this.HELP_TICKETCONTENT_SERVICE = 'helpTicketContent';
    }

    var _proto = HelpTicket.prototype;

    _proto.getHelpTickets =
    /*#__PURE__*/
    function () {
      var _getHelpTickets = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(userObj) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = this.HELP_TICKET_SERVICE;

                if (userObj.role == 'user') {
                  url += '/user/' + userObj._id;
                }

                _context.next = 4;
                return this.data.get(url);

              case 4:
                response = _context.sent;

                if (!response.error) {
                  this.helpTicketsArray = response;
                } else {
                  this.helpTicketsArray = [];
                }

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getHelpTickets(_x) {
        return _getHelpTickets.apply(this, arguments);
      };
    }();

    _proto.saveHelpTicket =
    /*#__PURE__*/
    function () {
      var _saveHelpTicket = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(helpTicket) {
        var serverResponse;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!helpTicket) {
                  _context2.next = 11;
                  break;
                }

                if (!helpTicket.helpTicket._id) {
                  _context2.next = 7;
                  break;
                }

                _context2.next = 4;
                return this.data.put(helpTicket, this.HELP_TICKET_SERVICE);

              case 4:
                serverResponse = _context2.sent;
                _context2.next = 10;
                break;

              case 7:
                _context2.next = 9;
                return this.data.post(helpTicket, this.HELP_TICKET_SERVICE);

              case 9:
                serverResponse = _context2.sent;

              case 10:
                return _context2.abrupt("return", serverResponse);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function saveHelpTicket(_x2) {
        return _saveHelpTicket.apply(this, arguments);
      };
    }();

    _proto.deleteHelpTicket =
    /*#__PURE__*/
    function () {
      var _deleteHelpTicket = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3(helpTicket) {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                console.log("deleting ticket and contents");

                if (!helpTicket) {
                  _context3.next = 5;
                  break;
                }

                _context3.next = 4;
                return this.data.delete(this.HELP_TICKET_SERVICE + '/' + helpTicket._id);

              case 4:
                console.log(helpTicket._id);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function deleteHelpTicket(_x3) {
        return _deleteHelpTicket.apply(this, arguments);
      };
    }();

    _proto.getHelpTicketContent =
    /*#__PURE__*/
    function () {
      var _getHelpTicketContent = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee4(helpTicketId) {
        var url, response;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                url = this.HELP_TICKETCONTENT_SERVICE + '/helpTicket/' + helpTicketId;
                _context4.next = 3;
                return this.data.get(url);

              case 3:
                response = _context4.sent;
                console.log(helpTicketId);

                if (!response.error) {
                  this.helpTicketContentArray = response;
                } else {
                  this.helpTicketContentArray = [];
                }

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function getHelpTicketContent(_x4) {
        return _getHelpTicketContent.apply(this, arguments);
      };
    }();

    _proto.uploadFile =
    /*#__PURE__*/
    function () {
      var _uploadFile = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(files, id) {
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.data.uploadFiles(files, this.HELP_TICKETCONTENT_SERVICE + "/upload/" + id);

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function uploadFile(_x5, _x6) {
        return _uploadFile.apply(this, arguments);
      };
    }();

    return HelpTicket;
  }()) || _class);
  _exports.HelpTicket = HelpTicket;
});
define('resources/data/user-object',["exports", "aurelia-framework", "./data-services"], function (_exports, _aureliaFramework, _dataServices) {
  "use strict";

  _exports.__esModule = true;
  _exports.User = void 0;

  var _dec, _class;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  var User = (_dec = (0, _aureliaFramework.inject)(_dataServices.DataServices), _dec(_class =
  /*#__PURE__*/
  function () {
    function User(data) {
      this.data = data;
      this.USER_SERVICE = 'users';
    }

    var _proto = User.prototype;

    _proto.saveUser =
    /*#__PURE__*/
    function () {
      var _saveUser = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(user) {
        var serverResponse;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!user) {
                  _context.next = 11;
                  break;
                }

                if (!user._id) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return this.data.put(user, this.USER_SERVICE);

              case 4:
                serverResponse = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.next = 9;
                return this.data.post(user, this.USER_SERVICE);

              case 9:
                serverResponse = _context.sent;

              case 10:
                return _context.abrupt("return", serverResponse);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function saveUser(_x) {
        return _saveUser.apply(this, arguments);
      };
    }();

    _proto.delete =
    /*#__PURE__*/
    function () {
      var _delete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(user) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(user && user._id)) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return this.data.delete(this.USER_SERVICE + '/' + user._id);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function _delete(_x2) {
        return _delete2.apply(this, arguments);
      };
    }();

    _proto.getUsers =
    /*#__PURE__*/
    function () {
      var _getUsers = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var response;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return this.data.get(this.USER_SERVICE);

              case 2:
                response = _context3.sent;

                if (!response.error) {
                  this.usersArray = response;
                } else {
                  this.usersArray = [];
                }

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function getUsers() {
        return _getUsers.apply(this, arguments);
      };
    }();

    return User;
  }()) || _class);
  _exports.User = User;
});
define('resources/elements/nav-bar',["exports", "aurelia-framework", "aurelia-router", "aurelia-auth"], function (_exports, _aureliaFramework, _aureliaRouter, _aureliaAuth) {
  "use strict";

  _exports.__esModule = true;
  _exports.NavBar = void 0;

  var _dec, _class;

  var NavBar = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router, _aureliaAuth.AuthService), _dec(_class =
  /*#__PURE__*/
  function () {
    function NavBar(router, auth) {
      this.authenticated = false;
      this.router = router;
      this.auth = auth;
      this.loginError = ""; // this.email = "";
      // this.password = "";
    }

    var _proto = NavBar.prototype;

    _proto.bind = function bind() {
      this.isAuthenticated = this.auth.isAuthenticated();
    };

    _proto.attached = function attached() {
      $('.navbar-nav a').on('click', function () {
        $('.navbar-nav').find('li.active').removeClass('active');
        $(this).parent('li').addClass('active');
      });
    };

    _proto.login = function login() {
      var _this = this;

      return this.auth.login(this.email, this.password).then(function (response) {
        _this.userObj = response.user;
        sessionStorage.setItem("userObj", JSON.stringify(_this.userObj));
        _this.loginError = "";
        _this.isAuthenticated = _this.auth.isAuthenticated();

        _this.router.navigate('home');
      }).catch(function (error) {
        console.log(error);
        _this.authenticated = false;
        _this.loginError = "Invalid credentials.";
      });
    };

    _proto.logout = function logout() {
      this.auth.logout(); // if (this.userObj) this.auth.logout(this.userObj.email);

      sessionStorage.removeItem('user');
      this.isAuthenticated = this.auth.isAuthenticated();
    };

    return NavBar;
  }()) || _class);
  _exports.NavBar = NavBar;
});
define('text!resources/elements/nav-bar.html',[],function(){return "<template>\r\n    <nav class=\"navbar navbar-expand-lg navbar navbar-dark bg-dark\">\r\n        <a class=\"navbar-brand\" href=\"#\">Help Me!</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\"\r\n            aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n            <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n            <form show.bind=\"!isAuthenticated\" class=\"form-inline\">\r\n                <div class=\"form-group mb-2\">\r\n                    <label for=\"staticEmail2\" class=\"sr-only\">Email</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"staticEmail2\" value.bind=\"email\" placeholder=\"Email\">\r\n                </div>\r\n                <div class=\"form-group mx-sm-3 mb-2\">\r\n                    <label for=\"inputPassword2\" class=\"sr-only\">Password</label>\r\n                    <input type=\"password\" class=\"form-control\" id=\"inputPassword2\" value.bind=\"password\" placeholder=\"Password\">\r\n                </div>\r\n                <button click.trigger=\"login()\" type=\"submit\" class=\"btn btn-primary mb-2\">Login</button>\r\n                <span show.bind=\"loginError\" style=\"color: white;margin-left: 10px;\">${loginError}</span>\r\n            </form>\r\n            <ul show.bind=\"isAuthenticated\" class=\"navbar-nav\">\r\n                <li class=\"nav-item active\">\r\n                    <a class=\"nav-link\" href=\"#home\">Home <span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#users\">Users <span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link\" href=\"#helpTickets\">Help Tickets <span class=\"sr-only\">(current)</span></a>\r\n                </li>\r\n                <li class=\"nav-item\">\r\n                    <a class=\"nav-link disabled\" href=\"#landing\" click.trigger=\"logout()\">Logout</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </nav>\r\n</template>";});
define('resources/index',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.configure = configure;

  function configure(config) {
    config.globalResources(['./elements/nav-bar', './value-converters/format-date']);
  }
});
define('resources/value-converters/format-date',["exports"], function (_exports) {
  "use strict";

  _exports.__esModule = true;
  _exports.FormatDateValueConverter = void 0;

  var FormatDateValueConverter =
  /*#__PURE__*/
  function () {
    function FormatDateValueConverter() {}

    var _proto = FormatDateValueConverter.prototype;

    _proto.toView = function toView(value) {
      var myDate = new Date(value);
      return myDate.toLocaleDateString() + "<br/>" + myDate.toLocaleTimeString();
    };

    return FormatDateValueConverter;
  }();

  _exports.FormatDateValueConverter = FormatDateValueConverter;
});
define('resources',['resources/index'],function(m){return m;});
//# sourceMappingURL=app-bundle.js.map