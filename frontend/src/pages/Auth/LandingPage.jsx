// export default function LandingPage(){
//   return <div>Login Page</div>;
// }
import PsychologyIcon from "@mui/icons-material/Psychology";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BarChartIcon from "@mui/icons-material/BarChart";
import EventIcon from "@mui/icons-material/Event";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MonitorHeartIcon from "@mui/icons-material/MonitorHeart";
import {
    Box,
    Container,
    Typography,
    Paper,

    Grid,
    Button,
    Stack,
    Chip
} from "@mui/material";

function LandingPage()
{
    const aiTools = [
    {
        title: "التنبؤ بأمراض الكبد",
        description:
        "اكتشف احتمالية الإصابة بأمراض الكبد باستخدام نموذج تعلم آلي مدرب بدقة.",
        path: "/liver-prediction",
    },
        {
            title: "التنبؤ بأمراض الكلى",
            description:
            "اكتشف احتمالية الإصابة بأمراض الكلى باستخدام نموذج تعلم آلي مدرب بدقة.",
            path: "/kidney-prediction",
        }
];

    const features = [
        {
        icon: <MonitorHeartIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
        title: "تتبع الصحة اليومي",
        desc: "سجل قياسات الضغط والسكر ونبضات القلب يوميًا.",
        },
        {
        icon: <BarChartIcon sx={{ fontSize: 50, color: "green" }} />,
        title: "تقارير وإحصائيات",
        desc: "مخططات شهرية وتقارير قابلة للتحميل PDF.",
        },
        {
        icon: <EventIcon sx={{ fontSize: 50, color: "purple" }} />,
        title: "حجز المواعيد",
        desc: "ابحث عن الأطباء واحجز مواعيدك بسهولة.",
        },
        {
        icon: <PersonIcon sx={{ fontSize: 50, color: "orange" }} />,
        title: "ملف الطبيب الشامل",
        desc: "إدارة الملف الشخصي والأسعار والمواعيد المتاحة.",
        },
        {
        icon: <FavoriteIcon sx={{ fontSize: 50, color: "red" }} />,
        title: "تنبيهات ذكية",
        desc: "تنبيهات فورية للأطباء عند وجود قراءات حرجة.",
        },
        {
        icon: <MonitorHeartIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
        title: "متابعة شاملة",
        desc: "متابعة حالة المرضى وإدارة المواعيد بفعالية.",
        },
        {
        icon: <PsychologyIcon sx={{ fontSize: 50, color: "#1976d2" }} />,
        title: "التنبؤ سريعا بالمرض",
        desc: "يمكنك التنبؤ ببعض الامراض بسرعة وسهولة باستخدام نموذج تعلم آلي مدرب بدقة.",
        },
    ];
    return(
        <>
        <Box
    sx={{
        backgroundColor: "white",
        minHeight: "10vh",
        borderBottom: "2px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: 4,
        gap: 2, // padding في الاتجاهين بدل pr/pl
    }}
    >
    <Typography
        variant="h4"
        sx={{
        display: "flex",
        alignItems: "center",
        color: "black",
        }}
    >
        <FavoriteBorderIcon
        sx={{
            fontSize: 30,
            color: "blue",
            mr: 1,
            verticalAlign: "middle",
        }}
        />
        صحتي
    </Typography>
    <Button
        variant="contained"
        component={Link}
        to="/login"
    >
        تسجيل الدخول
    </Button>
    </Box>
    <Box
    sx={{
        position: "relative",
        overflow: "hidden",
        background: "#f0f9ffff",
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        py: { xs: 8, md: 10 },
    }}
    >
    {/* faint heartbeat line — draws in on load */}
    <Box
        component="svg"
        viewBox="0 0 400 80"
        sx={{
        position: "absolute",
        top: "18%",
        left: "50%",
        transform: "translateX(-50%)",
        width: { xs: "140%", md: "60%" },
        maxWidth: 900,
        opacity: 0.12,
        pointerEvents: "none",
        }}
    >
        <path
        d="M0,40 L80,40 L95,15 L110,65 L125,10 L140,70 L155,40 L400,40"
        fill="none"
        stroke="#0F6E67"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="1"
        style={{
            strokeDasharray: 1,
            strokeDashoffset: 1,
            animation: "drawPulse 3.2s ease-out forwards",
        }}
        />
    </Box>

    <Container maxWidth="sm" sx={{ position: "relative", zIndex: 1 }}>
        <Stack alignItems="center" spacing={2.5}>
        <Chip
            icon={
            <Box
                sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                bgcolor: "#0F6E67",
                mx: 1,
                animation: "pulseDot 1.8s infinite",
                }}
            />
            }
            label="منصة طبية موثوقة"
            sx={{
            bgcolor: "#FFFFFF",
            border: "1px solid #CFE8E2",
            color: "#0F6E67",
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: 600,
            "& .MuiChip-label": { px: 1 },
            }}
        />

        <Typography
            variant="h3"
            align="center"
            sx={{
            fontFamily: "'Tajawal', sans-serif",
            fontWeight: 800,
            fontSize: { xs: 34, sm: 48, md: 58 },
            lineHeight: 1.25,
            color: "#0B3B36",
            }}
        >
            منصة إدارة الصحة الذكية
        </Typography>

        <Typography
            variant="subtitle1"
            align="center"
            sx={{
            fontFamily: "'IBM Plex Sans Arabic', sans-serif",
            fontSize: { xs: 16, md: 19 },
            color: "#4B6664",
            maxWidth: 480,
            lineHeight: 1.9,
            }}
        >
            تتبع صحتك اليومية، احجز مواعيد مع أفضل الأطباء، واحصل على تقارير طبية شاملة
        </Typography>

        <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            sx={{ justifyContent: "center", pt: 1, width: "100%", maxWidth: 380 }}
        >
            <Button
            component={Link}
            to="/login"
            variant="contained"
            size="large"
            fullWidth
            sx={{
                fontFamily: "'Tajawal', sans-serif",
                fontSize: 18,
                fontWeight: 700,
                borderRadius: "10px",
                py: 1.4,
                bgcolor: "#0F6E67",
                boxShadow: "0 8px 20px rgba(15,110,103,0.25)",
                "&:hover": { bgcolor: "#0B5852" },
            }}
            >
            انضم كطبيب
            </Button>
            <Button
            component={Link}
            to="/login"
            variant="outlined"
            size="large"
            fullWidth
            sx={{
                fontFamily: "'Tajawal', sans-serif",
                fontSize: 18,
                fontWeight: 700,
                borderRadius: "10px",
                py: 1.4,
                borderWidth: 2,
                borderColor: "#0F6E67",
                color: "#0F6E67",
                "&:hover": { borderWidth: 2, borderColor: "#0B5852", bgcolor: "rgba(15,110,103,0.06)" },
            }}
            >
            ابدا كمريض
            </Button>
        </Stack>
        </Stack>
    </Container>

    <style>{`
        @keyframes drawPulse { to { stroke-dashoffset: 0; } }
        @keyframes pulseDot {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.4; transform: scale(1.4); }
        }
    `}</style>
    </Box>
    <Box
    sx={{
        py: 10,
        background: "linear-gradient(180deg,#ffffff,#eef7ff)",
    }}
    >
    <Container maxWidth="lg">
        <Typography
        variant="h3"
        align="center"
        fontWeight="bold"
        sx={{ mb: 2 }}
        >
        🧠 أدوات الذكاء الاصطناعي
        </Typography>

        <Typography
        align="center"
        color="text.secondary"
        sx={{
            mb: 7,
            fontSize: 18,
        }}
        >
        استكشف أدواتنا الطبية المعتمدة على الذكاء الاصطناعي لمساعدتك في التنبؤ بالأمراض بسهولة.
        </Typography>

        <Grid container justifyContent="center" spacing={4}>
        {aiTools.map((tool, index) => (
            <Grid item xs={12} sm={10} md={6} lg={5} key={index}>
            <Card
                sx={{
                borderRadius: 5,
                p: 2,
                height: "100%",
                border: "1px solid #E3F2FD",
                boxShadow: "0 10px 30px rgba(0,0,0,.08)",
                transition: ".35s",

                "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 20px 45px rgba(25,118,210,.25)",
                },
                }}
            >
                <CardContent sx={{ textAlign: "center" }}>
                <Box
                    sx={{
                    width: 85,
                    height: 85,
                    borderRadius: "50%",
                    background: "#E3F2FD",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mx: "auto",
                    mb: 3,
                    }}
                >
                    <PsychologyIcon
                    sx={{
                        fontSize: 48,
                        color: "#1976d2",
                    }}
                    />
                </Box>

                <Typography
                    variant="h5"
                    fontWeight="bold"
                    gutterBottom
                >
                    {tool.title}
                </Typography>

                <Typography
                    color="text.secondary"
                    sx={{
                    mb: 3,
                    lineHeight: 1.8,
                    }}
                >
                    {tool.description}
                </Typography>

                <Box
                    sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.5,
                    mb: 4,
                    }}
                >
                    <Typography
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                    }}
                    >
                    <CheckCircleOutlineIcon color="success" />
                    نتيجة فورية خلال ثوانٍ
                    </Typography>

                    <Typography
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                    }}
                    >
                    <CheckCircleOutlineIcon color="success" />
                    يعتمد على نموذج تعلم آلي مدرب
                    </Typography>

                    <Typography
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                    }}
                    >
                    <CheckCircleOutlineIcon color="success" />
                    لا يتطلب تسجيل الدخول
                    </Typography>
                </Box>

                <Button
                    component={Link}
                    to={tool.path}
                    variant="contained"
                    size="large"
                    fullWidth
                    sx={{
                    borderRadius: 3,
                    py: 1.5,
                    fontWeight: "bold",
                    fontSize: 17,
                    }}
                >
                    ابدأ التنبؤ
                </Button>
                </CardContent>
            </Card>
            </Grid>
        ))}
        </Grid>
    </Container>
</Box>
<Box sx={{ backgroundColor: "#FFFFFF", minHeight: "100vh" }}>
  <Container maxWidth="lg">
    <Box sx={{ textAlign: "center", pt: 12, pb: 1 }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Tajawal', sans-serif",
          fontWeight: 800,
          color: "#0B3B36",
        }}
      >
        مميزات المنصة
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{
          fontFamily: "'IBM Plex Sans Arabic', sans-serif",
          fontSize: 18,
          color: "#5C7875",
          mt: 1,
        }}
      >
        كل ما تحتاجه لإدارة صحتك في مكان واحد
      </Typography>

      {/* signature underline, echoes the hero's pulse-line accent */}
      <Box
        sx={{
          width: 64,
          height: 4,
          borderRadius: 2,
          mx: "auto",
          mt: 2.5,
          background: "linear-gradient(90deg, #0F6E67, #D98E3F)",
        }}
      />
    </Box>

    <Box sx={{ flexGrow: 1, p: 5 }}>
      <Grid container spacing={3} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={0}
              sx={{
                position: "relative",
                overflow: "hidden",
                p: 4,
                height: "100%",
                textAlign: "center",
                borderRadius: 3,
                border: "1px solid #E3EFEC",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 12px 24px rgba(15,110,103,0.12)",
                  borderColor: "#CFE8E2",
                },
                "&:hover .accent-bar": { transform: "scaleX(1)" },
              }}
            >
              {/* growing top accent, hidden until hover */}
              <Box
                className="accent-bar"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 4,
                  background: "linear-gradient(90deg, #0F6E67, #D98E3F)",
                  transform: "scaleX(0)",
                  transformOrigin: "center",
                  transition: "transform 0.3s ease",
                }}
              />

              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  bgcolor: "rgba(15,110,103,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: "auto",
                  mb: 2,
                }}
              >
                {feature.icon}
              </Box>

              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Tajawal', sans-serif",
                  fontWeight: 700,
                  color: "#0B3B36",
                }}
              >
                {feature.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                  mt: 1,
                  color: "#5C7875",
                  lineHeight: 1.8,
                }}
              >
                {feature.desc}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
</Box>

<Box
  sx={{
    background: "linear-gradient(135deg, #0B3B36 0%, #0F6E67 100%)",
    minHeight: "20vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    py: 4,
  }}
>
  <Typography
    variant="h4"
    align="center"
    sx={{
      fontFamily: "'Tajawal', sans-serif",
      fontWeight: 800,
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 1,
    }}
  >
    <FavoriteBorderIcon sx={{ fontSize: 40, color: "blue" }} />
    صحتي
  </Typography>

  <Typography
    variant="subtitle1"
    align="center"
    sx={{
      fontFamily: "'IBM Plex Sans Arabic', sans-serif",
      mt: 1.5,
      color: "rgba(255,255,255,0.7)",
    }}
  >
    منصة إدارة الصحة الذكية - جميع الحقوق محفوظة 2024
  </Typography>
</Box>
        </>
    );
}
export default LandingPage;