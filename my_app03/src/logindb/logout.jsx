const logout = async () => {
  await api.get('/logout.php');
  window.location.reload();
};
