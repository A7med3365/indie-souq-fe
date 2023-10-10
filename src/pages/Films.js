import React from 'react';
import Search from '../components/Search';
import FilmCard from '../components/FilmCard';

export default function Films() {
  let features = [
    {
      name: 'Ziggy and Moon',
      by: 'Ahmed Al-Mansouri',
      type: 'Short',
      genre: ['Action', 'Adventure'],
      img: 'https://s3-alpha-sig.figma.com/img/69c4/6289/d851020acab2051ccbf43d558bf40678?Expires=1697414400&Signature=F2Lfn1Kn-Fj-Wymz~-6E~103dKRK8oof13xEhAhq4IWoQxX7ieen1ZcvAOT5P6b3n-bOcqMs4-lgSctjB-s2G~R~kdhE1SfHmGyjiqwvanY95eBScCyVM5Ekh~bsHYjmJltqgun3XvutCVWjji2EjreKFspRGTURAsEQPdQy9j3B8LQz2mAVk2ZxD8oo-R4Qc8TRRf2bF6frFTHgnjpd48Y8GiFayr8mpDK~JF6eqBssnXqsI62fsACObts6n5sjT00RLwRQTe~uEHwAH21dYA9geD6fxYKhfoY4oeehpeNQA3~iD5wxPSNkbiKVQZzpqZjd7Baf-8RC05Y2ET--1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Animal',
      by: 'Fatima Hassan',
      type: 'Short',
      genre: ['Horror', 'Crime'],
      img: 'https://s3-alpha-sig.figma.com/img/956d/d96f/862bc77223ba455cf9e72786d7732c82?Expires=1697414400&Signature=fZGy8PfXBv3fXRW9Y3e6Yyu5htnWRZpy7wpXlg1OV3~Uri1LBWW6o1m25F0jnsn2UX9WRdrO1-fTtDXikA~24XnLLDokRm2IV9LLNFVUvMF4Y6dTzJeEQ3zkbtyG6SFevKD5sU9IhKGj40E6DSuS1jF5tAOZvC3G88405Jz90~ibw7FGH6iUW9V6MurRUT4SZNYI3oQ-OiryUWpKhtxv1gYgw3AhIpBKJxE6pBKgb-rOzW6bwwMMJy8029x5Mfo1hSJqrGPPzxQxEmI-Fmg3zIMUyFYzprF5KKiwstgU2WXqge4IMe-qFpDMfX7V69oe2J7JFSGO4BKbR8-Hdvj8Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Claude',
      by: 'Khalid Abdel Rahman',
      type: 'Short',
      genre: ['Romantic', 'Drama'],
      img: 'https://s3-alpha-sig.figma.com/img/b19b/8e5a/f3c103e393f8da36418428b6b63c43c3?Expires=1697414400&Signature=Molns6uHfl7HXq6QmuShupZyPokByQ0HYro7tqywzMbr3awGUGjKvGkKlOQx5kKb9-a3p16UVBCsSBzGIEoL8VCPtyazFsIC08Adj3Kou1VqjY7bRkPGaTFwjXSiC9szKt49ZiezROA6nED1qT0odkFBvO2ERqWoehXzwwcfC6EF8y14FgCy5JRJxZO-2fuXJzr-AJuyy1AIHPA-oYZH9Y0NBgjVXLH1sPMnVduUEDuKZE4sWhzkZpSxDiV~4ecxr5-Z4xSdJIbz38Ckm0hGrH4~zK~zHn863cQPeFdHzPmWFyApvqW~b7V5JLu3BYXE4YjnSB-V9s9~R8~sSFVj0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];
  let films = [
    [
      {
        name: 'Extension',
        by: 'Aisha Bakr',
        type: 'Short',
        genre: ['Musical', 'Romance'],
        img: 'https://s3-alpha-sig.figma.com/img/8a5a/4c5c/20c561096b4e8f5b269b10e907aaabe7?Expires=1698019200&Signature=iN3qX9hJDnkUCBxEVbSNhJ1gbic3PHEW6yuQJw~jP5s7CP043RRVT9xEuzkTxeYEFkbxi1uaLltM5s30~yMBtaRMp4R4ucW~qMaWxNf4Xv4is72D7T988fkfhDsZwO8KmmPTg37ONGweUtoavFvPnhOQUMNaDbbjCD7QEJD-VhsBWUrYnxNxaWvbLbpRWx05~-zgGgTpCXFrcrmFOAoOgeLf0RJh8pkeZjptsHCgdjJRsQx-zwnHn7rl9rQcapDvssVkIr65wNI6B2OLqtGMOIxd33ixui405v3f7ME0tNix2q1jw1IaIBhsWdl7Oxhnu-3t8uhZgkivPEC38dpslA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        name: 'Beyond the Glass',
        by: 'Hassan Mahmoudi',
        type: 'Short',
        genre: ['Horror', 'Supernatural'],
        img: 'https://s3-alpha-sig.figma.com/img/047e/1a6a/cece7f1ba2f4a24c178ecfd7c8ffc2f1?Expires=1698019200&Signature=EIawibDGDTenmuqXDikNwaA9h5S-uVU67~DpsnnRqrKYpPzchqB9KGFMZkdxQL~r0yOhcuWDJJtsjf9Onm94CEB84ZK7gc53Jpqw8zEAOxDkC5530QDeG-6~O6ZZrKeEBkBTZ3KEyK6RuhACl14UyiI9UgoWU3REQolY6-IHt7ObMCGRgcKcW4JSaH8YGRC4i~hz7nCvgYJI-jzNv3YkjY07Rqpfq8oaUOXJkHS35iwKmXQxCxhOTF8ovT5pLLsbTLYI-IVNsx-HIiycQbWqevzQcamhKajcuetAubOSIyvKTYBDY8jtuWScDihtTmhERLGSlTUK8EeP9~9~tUp9Yw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        name: 'Torlina',
        by: 'Nadia Khoury',
        type: 'Short',
        genre: ['Crime', 'Film Noir'],
        img: 'https://s3-alpha-sig.figma.com/img/e166/7ab4/7a4929eb4ef2e7edf6f225677e4669b1?Expires=1698019200&Signature=Dwnb8Jnbw~9Qmth0NESB5Co84yu78O1hvfaXhSruyhbb8G4R9mlUpVoQ4dZLVuc~QRXAhVU2j7AyY5aQVlnOId86spl6Vl1wCenjjoKRVFMl6mjzhy9Ja0NFzC1eC04rM2ZlH6IGLQPoT3~IKvXkpbfMdrvZjGPUVNk7kjxth6kI04NkQ7lVAjuhyBnJMR5l6or6i598aODOgIjah79OeHINgraAqJllLJttty1HSuEjGbj2Yx76YOZybphp8tOz6ljbkyrWUEmr94msijN2gMpuFrfVJpaDB3a0CVTqauHEIBoDSs8MNY2nxMZ-3yRtKWNTXCUp8pdKOT8l5xDQnQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        name: 'Scarlet Silence',
        by: 'Karim Farid',
        type: 'Short',
        genre: ['Drama', 'Thriller'],
        img: 'https://s3-alpha-sig.figma.com/img/8d40/0b64/2255ab86f54a60a0bcb03c23b9127e29?Expires=1698019200&Signature=PLxRwuP74hbTcmmOpMWg0wwWGD5bbyTyyhjiuW0ejKZSAN-LdkjB8PCuevzOOd6Q7uVILUOEdmupx-iCmkYdLBPFaim26xW5-8zx45C62q3YwoRXGRUYErkZ4wSMREUckJraDCNev3s~pbQWWBzFUB6K2p1DSA9~RNlBoqRcnH4-4PMoPJQTT93sqHDjaR5O8PGxEX69PYtK8cKxmheB6NzvZ5zw7uPtEyrSs-Lq~qEDnSaFiRgo3tI7H5FyAlLhURUUU3IOLkcXg8kvlUDQmvEWTjiTRfJTlrB050rgnzy9CegZkoB1WQG-IROE7rwdvMvok74KNnxMeE-5jTFK9A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
    ],
    [
      {
        name: 'Apples & Pears',
        by: 'Rana Ahmed',
        type: 'Short',
        genre: ['Romance', 'Crime'],
        img: 'https://s3-alpha-sig.figma.com/img/ec91/2a60/29996f0cb7acab756cfc7895f1e8ad64?Expires=1698019200&Signature=RcRkPRn0ewZ4p-9SFpUwKAqD-AjfqeyIVHrlBuO1eyi0BIqwOCqaLi0Xn~TY6Cdlq6Sn4F2LxSNvJsQjdpgRiE9u0p3tPqS5M69MGqIXqHCBGoF5WiBYluM52BzwoHxQXFDekYUYvqgxyOQpWmqmXg6FfEfKJp8hWUZeOYqX-3qJg9A9nHymx4M0UVhiCtRrVI~eMwNN1iXoIM-YE4Q6DcdSZnL-SLB-PHwYGtRZ70La2ERULcpPGluKcgKD5STaLt-bwxWLPv-BuH~wOkbLDx7ObRqVeLd8UTiNHjf0UEkA3BbVf7RatbnPl0t0AlIpid2pBBtLHESU5jUNIlcitg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        name: "HOW'S YOUR BROTHER?",
        by: 'Fadi Nassar',
        type: 'Short',
        genre: ['Horror', 'Action'],
        img: 'https://s3-alpha-sig.figma.com/img/dbd9/7844/8a13d2a5bfdf3db2148ac8c1923120b9?Expires=1698019200&Signature=k2i8lD5S69lNVB4WgovtPaUewGkUpemqBvgzkhW~BQqhjPFEURiJuHNGy1pKfHji4U28ZeDw2tWxhyhVywrumC1KNZIFmTbPIyCbKg~7OnIyWandoXL39ILOQTThjiN1uv6GBHM0SKjcoA9YLURZdMpkvJgDPTeCoTPb~cYtuIyestQgGooGkGpLej7R5HvH4zaBpxI0pmrbRkZhtY4lOIVCM~P2p8qaw375lcX8oalt44cK9~pxq-3DTSOMBlvQjmNTVNXx3mLFcawmmdJJNgLZOma5xUTeUftRH3965XkOcT6hrewDNriKuNsCo4~kZzuUY88D6oI0XgIBu5JB7g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        name: 'Framed',
        by: 'Samar Haddad',
        type: 'Short',
        genre: ['Thriller', 'Crime'],
        img: 'https://s3-alpha-sig.figma.com/img/0d04/41d5/be4b9e161264c7241b4e1f65f43b7555?Expires=1698019200&Signature=UwZmEGTBJUYSezK1Mr-eLjo2gfEqHBDu~iMmVVLx7QcVnthE~fHm1dKhY-eSD~7hkgyGJLnwcJCC7VCVlUz1-xr3CPpZvVm9fKQBg~ol0Bszl~eiPIZoOJW0ZhEF7NzOa0S3S5QD0jK6iubA~FeKhnuiAl4kQLED1kxUUyK2HBi5sgb-4D3Owyw~CyR4uexVvELJj1NFJHVyp~ACn3i96L5zidoUb-FGVMkjf-3ig1TD568drJTS6cV80y5Fyn-6Gx5ZvWws~DnA5j79nm075VgGjNghCn1YQUifwbBe0F-WQcI940whEqCFXa~Bk5PyuwWZ7Nee3sX91helWAdXqw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        name: 'DOC',
        by: 'Youssef Hamza',
        type: 'Short',
        genre: ['Action', 'Crime'],
        img: 'https://s3-alpha-sig.figma.com/img/5a0d/88f7/54d34a39ab66b39e8b3c04b7a987c094?Expires=1698019200&Signature=X4FGYuRGPwk6u3W-oz~C-m88hKiTjuHgv24wy~CROthniRC~SipAj2ucbxkCCeSWX4SFZURUIt-CMA~HA8~KUR-UoZofuDRa7j4dJO2Xur-TZEGulCFt5DqtWOul9H6CpSk29E2km-3A3DkUcuug5BopW42fejusqWpkBw0lPgRDJE2xEYwykFjHkc8QbMLCrdr1LuGUosXqq2gplNdCJ-9Z5honM5cmSFPI-jQW-TrIAZLnIbcVFBU1v9rVoHTFvrUvU8SDaI0-Z4cn7s0k2XftbF~Wlsg~x7uO6w6yw8Posz-QfRMlQTRn6U95XtriTyUOGulDccrv6H4QnqcbNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        name: 'Morlam',
        by: 'Layla Ibrahim',
        type: 'Short',
        genre: ['Musical', 'Romance'],
        img: 'https://s3-alpha-sig.figma.com/img/37ba/06ef/354824e971d7b0035b8e390bbc1e04c5?Expires=1698019200&Signature=Q1Tlc5kn5qvxeg5HUVC0-ySh~52kPIWuzhQ3WSSM2IUnZPKRsWB8AscsLU0B7dlm4T0gPKva44zt3qWIbn-toyX~bIAk-MqRu3mk7UX6kBjlzqsa~5d58DD4efibnsU1iITVzj0gjg9Z3ci2PjG-Y4RTa2Z6j-f2lowc0GGU8sg3ibj-~w1NMcF1ygf1vjrzIlV8qBwgICQByTEIoZYWAHvjFoViucukJxk3d0wA2wu3QOMv0SamBZGs~Nu11AQ9sJh38LgGPcYzg2iUy5fr~gY7RX8CoAhxjczVC9izXlKsqR3NHXLvx8O4oaCh~T2cHeSG1rLywnVPbPx4KgW2vQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
    ],
    [
      {
        name: 'Lost Island',
        by: 'Omar Salah',
        type: 'Short',
        genre: ['Action', 'Horror'],
        img: 'https://s3-alpha-sig.figma.com/img/823d/867a/07b2c751996d60b9ca17c2f9a75fbab7?Expires=1698019200&Signature=M8BbNf8c3yLc1X786UanuPz--PFfRL5N6QU5vgfTwVP9poQ9vr-vX481GZoUbC4~y-ND-hwdtkN8KqkgpQTkxxnn3Bu0jaKVKz1rYgfivqKDwUC0gtL3ob6A8CHhe8igEc2blIeLVEVv-ElrjjKjx9gCxlpVetB1OZorVtkerVFXlsFQBNBH5jeRwiHcTpMWVhLPMqFWSeLTNUtGTdGAM3A5F2oQm3rK8NIT45dDYGdXFUMOqxryMv0h~WkcI5ROPCgMLR4-kHrAGNJv6SQwCUvIfRDmug5ijhgD~q1WEBeup1uDyXk70HBsm82789STxCcltLxkATKzhzOlbB8ZuQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        name: 'Nesting Doll',
        by: 'Tori Malcangio',
        type: 'Short',
        genre: ['Drama', 'Thriller'],
        img: 'https://s3-alpha-sig.figma.com/img/7b8b/8b44/bd9996ddcad86ddedcf7e14a27a5050f?Expires=1698019200&Signature=AaD31tbVLUDr89Ae-TFqX5Xr0bELTowLJw2TFUStoQnceVSrXHni6toHMpOEY6sIGJG1S0dSaBa8qZVbV3iH45coElS3i5WiYpbT2NqvM0nNpU2O92VtzVyuoxbHyD1MaOPTiqXqvoKq4EN-A3KKFRb3eL5WEaVzmWVmFok3iG8pBbopvf94rtTlCVcN7Xx-PoKKYHmgSI8vLqvasvcpHbjDYls3nKz-QuKJLsHYyzFGbLjWesOjIJosKNSxFEcqSXpEb14pcvV1nu~rXWMdg8JLbA4BDgYUa245NejiediWnyKsTx6-EMqPMbap2mNpLkfNLx3PgsBfizLHp6GPdQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        name: 'Lost Connections',
        by: 'Walid Sharif',
        type: 'Short',
        genre: ['Action', 'Horror'],
        img: 'https://s3-alpha-sig.figma.com/img/21b9/e66e/28400260f345043c677e0963394a3eb5?Expires=1698019200&Signature=LbCJBLaN6XWkdV-9IUH4EUfFfDZMcE4T3BTCh-z7VALev0X6kV~dGfzKvzm9Up38JWmV07SDXxXV8PHAlMdltjDVl4wo6LEKkjlH61tm0~gStySNlWIIP71PAXpqEa2a0dEdlFtbLPv8BixuiaVw0EJ83UwIhTL1KxI22ZxKzl0g1xOY~WmrLyCAJtE7whQDSie379vYt0U-I~5JDj0D9juL67jPc767qlBdhdBRotqZ~cGqlaDWXapTYp3oYwXdi3gSaDVtMuZAX3zp8Ef5UNED4WgSd2KCUNY8fw48r~ZIAb0tqMl3Vg64tHCJuhz4i219T~xgvBJkUukbCuMZjg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
      {
        name: 'Just The Two of Us',
        by: 'Noura Saad',
        type: 'Short',
        genre: ['Romance', 'Drama'],
        img: 'https://s3-alpha-sig.figma.com/img/6ed9/f6b3/b330a69d772a86497210798d58e2e41f?Expires=1698019200&Signature=INAaM2iHfrRCj6UPU5juUctU~P60WUKQ7elgo5onUWeoewglvmS5gR4XqDvOqy0joPknUa1~FiZcKTPz4QOU72AyiwXwkas1ERXGoERR017iY9ZGbWGtzVbnqPoWgezhxAjXZSS5yWNrza4pO0qUmJEhZCR~~dznLwPQrLekwwWnnPORTcKyeJ-7EOZjf7tpQG1K2xVDqc6F9ZZY1~Sw7k8mdid4jCPvrbsM6JegLCrH3tgpLPLCpQEALpiDw44NEC-sKYCgTQDWNA4-v7oQ22m4gg9k1tVmw-HbcRcJJss7G-2JoiM5GTF4ZQL-Y5Xvi-J4WjiNxBuL8pfk5Cigpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      },
    ],
  ];
  return (
    <div>
      <div className="flex justify-center my-[88px]">
        <Search />
      </div>
      <div class="flex flex-col bg-white w-full max-w-[1440px] m-auto relative gap-[36px]">
        <div class="flex overflow-x-scroll pb-[36px] hide-scroll-bar flex-nowrap gap-[33px] snap-mandatory snap-x">
          {features.map((film, i) => {
            return (
              <div key={i} class="inline-block snap-center">
                <FilmCard film={film} size={'lg'} />
              </div>
            );
          })}
        </div>
        {films.map((list) => {
          return (
            <div class="flex overflow-x-scroll pb-[36px] hide-scroll-bar flex-nowrap gap-[33px] snap-mandatory snap-x">
              {list.map((film, i) => {
                return (
                  <div key={i} class="inline-block snap-center">
                    <FilmCard film={film} size={'md'} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
